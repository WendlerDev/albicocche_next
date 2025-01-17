// /* eslint-disable @next/next/no-img-element */
// "use client";
// import AuthInput from "@/components/auth/Auth";
// import { WarningIcon } from "@/components/icons/icons";
// import Logo from "@/components/template/Logo";
// import useAuth from "@/data/hook/useAuth";
// import { auth } from "@/firebase/Config";
// import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
// import { SetStateAction, useState } from "react";

// export default function Auth() {
//   // const { loginGoogle } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [authType, setAuthType] = useState<"login" | "sign-up">("login");
//   const [error, setError] = useState("");

//   function showAlert(message: SetStateAction<string>, time = 5) {
//     setError(message);
//     setTimeout(() => setError(""), time * 1000);
//   }

//   function submit() {
//     if (authType === "login") {
//       console.log("login");
//       showAlert("Error login");
//     } else {
//       console.log("sign-up");
//       showAlert("Error sign-up");
//     }
//   }

//   async function loginGoogle() {
//     const provider = new GoogleAuthProvider();
//     try {
//       console.log("Tentando fazer login com Google...");
//       // const result = await signInWithPopup(auth, provider);
//       const result = await signInWithPopup(auth, provider);
//       console.log("Usuário logado:", result.user);
//     } catch (error: any) {
//       console.error("Erro ao tentar fazer login:", error);
//     }
//   }

//   return (
//     <div
//       className={`
//             flex
//             h-screen
//             items-center
//             justify-center
//         `}
//     >
//       <div
//         className={`
//             hidden
//             md:block
//             w-1/2
//             lg:w-2/3
//             `}
//       >
//         <img
//           className={`
//                     h-screen
//                     w-full
//                     object-cover`}
//           src="/bground.jpg"
//           alt="BackgroundImage"
//         ></img>
//       </div>
//       <div
//         className={`
//                 md:w-1/2
//                 lg:w-1/3
//                 w-full
//                 justify-center
//                 items-center
//                 m-10`}
//       >
//         <div>
//           <h1
//             className={`
//                     text-center
//                     text-gray-800
//                     font-bold
//                     mb-5
//                     text-3xl
//                 `}
//           >
//             {authType === "login" ? "Please Login" : "Please Sign-up"}
//           </h1>

//           {error ? (
//             <div
//               className={`
//                         flex
//                         text-red-700
//                         justify-center
//                         py-3
//                         px-5
//                         m-2
//                         rounded-lg
//                         `}
//             >
//               {WarningIcon(7)}
//               <span
//                 className={`
//                                 ml-3
//                                 `}
//               >
//                 {error}
//               </span>
//             </div>
//           ) : (
//             false
//           )}
//           <AuthInput
//             label="Email:"
//             value={email}
//             type="email"
//             required
//             onChangeValue={setEmail}
//           />
//           <AuthInput
//             label="Password:"
//             value={password}
//             type="password"
//             required
//             onChangeValue={setPassword}
//           />
//           <button
//             onClick={submit}
//             className={`
//                 w-full
//                 bg-indigo-500
//                 hover:bg-indigo-400
//                 text-white
//                 transition-all duration-300 ease-in-out
//                 rounded-lg
//                 px-4 py-3
//                 mt-6
//             `}
//           >
//             {authType === "login" ? "Login" : "Sign-up"}
//           </button>
//           <hr
//             className={`
//                 my-6
//                 border-gray-300
//                 w-full
//                 `}
//           />
//           <button
//             onClick={loginGoogle}
//             className={`
//                     flex
//                     justify-center items-center
//                     w-full
//                     bg-red-500
//                     hover:bg-red-400
//                     text-white
//                     transition-all duration-300 ease-in-out
//                     rounded-lg
//                     px-4 py-3
//                     mt-6
//                     `}
//           >
//             <div
//               className={`
//                     flex
//                     ml-3
//                     items-center`}
//             >
//               <Logo
//                 src="/google.svg"
//                 alt="Logo Google"
//                 width={20}
//                 height={20}
//                 priority
//               />
//               <span className={`ml-2 justify-center items-center`}>
//                 Login with Google
//               </span>
//             </div>
//           </button>
//           {authType === "login" ? (
//             <p
//               className={`
//                             mt-8
//                         `}
//             >
//               Don`t have an Account?
//               <a
//                 onClick={() => setAuthType("sign-up")}
//                 className={`
//                                 ml-2
//                                 text-blue-500
//                                 hover:text-blue-700
//                                 font-semibold
//                                 cursor-pointer`}
//               >
//                 Create and Account
//               </a>
//             </p>
//           ) : (
//             <p
//               className={`
//                             mt-8
//                         `}
//             >
//               Already have an Account?
//               <a
//                 onClick={() => setAuthType("login")}
//                 className={`
//                                 ml-2
//                                 text-blue-500
//                                 hover:text-blue-700
//                                 font-semibold
//                                 cursor-pointer`}
//               >
//                 Clique here to Login
//               </a>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useAuth } from "@/data/context/AuthContext";

export default function Login() {
  const { signIn } = useAuth();

  return (
    <div>
      <h1>Please sign in to view content</h1>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={signIn}
      >
        Sign in with Google
      </button>
    </div>
  );
}
