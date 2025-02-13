/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { createContext, useState, useEffect } from "react";
// import Cookies from 'js-cookie';
// import User from "@/model/User";
// import { useRouter } from "next/navigation";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { auth } from "@/firebase/Config";

// interface AuthContextProps {
//   user: User | null;
//   loginGoogle: () => Promise<void>;
//   logout: () => Promise<void>;
//   loading?: boolean;
// }

// const AuthContext = createContext<AuthContextProps>({
//   user: null,
//   loginGoogle: async () => { },
//   logout: async () => { },
// });

// async function mapUserToUserModel(userFirebase: any): Promise<User> {
//   const token = await userFirebase.getIdToken();
//   return {
//     uid: userFirebase.uid,
//     name: userFirebase.displayName || "",
//     email: userFirebase.email || "",
//     token,
//     provider: userFirebase.providerData[0]?.providerId || "",
//     imageUrl: userFirebase.photoURL || "",
//   };
// }

// function manageCookie(loggedIn: boolean) {
//   if (loggedIn) {
//     Cookies.set('albicocche-cookie', 'true', { expires: 1 });
//   } else {
//     Cookies.remove('albicocche-cookie');
//   }
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (userFirebase) => {
//       if (userFirebase) {
//         const mappedUser = await mapUserToUserModel(userFirebase);
//         setUser(mappedUser);
//         manageCookie(true);

//         // Armazena o token atualizado no localStorage
//         const token = await userFirebase.getIdToken();
//         localStorage.setItem("firebaseToken", token);
//       } else {
//         setUser(null);
//         manageCookie(false);
//         localStorage.removeItem("firebaseToken"); // Remove o token ao deslogar
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   async function loginGoogle() {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       console.log("Usuário logado:", result.user);
//     } catch (error: any) {
//       console.error("Erro ao fazer login com Google:", error.message);
//       console.error("Código do erro:", error.code);
//       alert("Erro ao fazer login. Tente novamente.");
//     }
//   }

//   async function logout() {
//     try {
//       await signOut(auth);
//       setUser(null);
//       manageCookie(false);
//       localStorage.removeItem("firebaseToken");
//       router.push("/login");
//     } catch (error) {
//       console.error("Erro ao realizar logout:", error);
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loginGoogle,
//         logout,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContext;

"use client";
import { createContext, useState, useEffect } from "react";
import User from "@/model/User";
import { useRouter } from "next/navigation";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/Config";

interface AuthContextProps {
  user: User | null;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  loading?: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loginGoogle: async () => {},
  logout: async () => {},
});

async function mapUserToUserModel(userFirebase: any): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName || "",
    email: userFirebase.email || "",
    token,
    provider: userFirebase.providerData[0]?.providerId || "",
    imageUrl: userFirebase.photoURL || "",
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        const mappedUser = await mapUserToUserModel(userFirebase);
        setUser(mappedUser);

        // Armazena o token atualizado no localStorage
        const token = await userFirebase.getIdToken();
        localStorage.setItem("firebaseToken", token);
      } else {
        setUser(null);
        localStorage.removeItem("firebaseToken"); // Remove o token ao deslogar
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    try {
      console.log("Tentando fazer login com Google...");
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado:", result.user);
    } catch (error: any) {
      console.error("Erro ao tentar fazer login:", error);
      if (error.code === "auth/popup-closed-by-user") {
        alert("Você cancelou o login. Tente novamente.");
      } else {
        alert("Erro ao fazer login. Tente novamente.");
      }
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("firebaseToken");
      router.push("/login");
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
