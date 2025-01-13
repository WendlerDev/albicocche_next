/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"
// import { createContext, useState } from 'react'

// import User from '@/model/User'
// import { useRouter } from "next/navigation";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
// import { auth } from '@/firebase/Config';

// interface AuthContextProps {
//     user: User | null
//     loginGoogle: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextProps>({
//     user: null,
//     loginGoogle: async () => { },
// })

// async function userLogged(userFirebase: any): Promise<User> {
//     const token = await userFirebase.getIdToken
//     return {
//         uid: userFirebase.uid,
//         name: userFirebase.displayName,
//         email: userFirebase.email,
//         token,
//         provider: userFirebase.providerData[0]?.providerId,
//         imageUrl: userFirebase.photoURL
//     }
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {

//     const [user, setUser] = useState<User | null>(null);
//     const router = useRouter();

//     onAuthStateChanged(auth, async (userFirebase) => {
//         if (userFirebase) {
//             const user = await userLogged(userFirebase);
//             setUser(user);
//         } else {
//             setUser(null);
//         }
//     });

//     async function loginGoogle() {
//         try {
//             const provider = new GoogleAuthProvider();
//             const response = await signInWithPopup(auth, provider);
//             const user = await userLogged(response.user);
//             setUser(user);
//             router.push("/");
//         } catch (error) {
//             console.error("Erro no login com Google:", error);
//         }
//     }

//     return (
//         <AuthContext.Provider value={{
//             user,
//             loginGoogle
//         }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext

"use client";
import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
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
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loginGoogle: async () => { },
  logout: async () => { },
});

async function userLogged(userFirebase: any): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0]?.providerId,
    imageUrl: userFirebase.photoURL,
  };
}

function setCookie(logged: any) {
  if (logged) {
    Cookies.set('albicocche-cookie', logged, { expires: 1 });
  } else {
    Cookies.remove('albicocche-cookie');
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        const user = await userLogged(userFirebase);
        setUser(user);
        setCookie(true);
      } else {
        setUser(null);
        setCookie(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  async function loginGoogle() {
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const response = await signInWithPopup(auth, provider);
      const user = await userLogged(response.user); // aqui eu capturo os dados do usuário
      setUser(user); // aqui eu capturo o estado do usuário
      setCookie(true); // aqui define o cookie de sessão
      router.push("/"); // Redireciona após login
    } catch (error) {
      setLoading(true)
      console.error("Wasnt possible to login with Google:", error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setUser(null); 
      setCookie(false);
      setLoading(false);
      router.push("/auth");
    } catch (error) {
      console.error("Error on logout:", error);
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
