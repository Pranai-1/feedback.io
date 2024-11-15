// "use client"
// import { useRouter } from "next/navigation"

// export default function SignupButton(){
//     const router = useRouter();

//     return(
//         <>
//             <button
//                 className="bg-[#4B4ACF] p-2 rounded-lg font-medium px-4"
//                 onClick={() =>{ 
//                     console.log("clicked")
//                     router.push('/signup')}}
//             >
//                 Signup
//             </button>
//         </>
//     )
// }
import { signIn } from "@/auth";
// import googleImage from "../../public/google.png";

export default function SignupButton() {




  return (
    <form className="w-[100%]" action={async () => {
        "use server"
         await signIn("google", { redirectTo: "/" });
       }}>
      <button type="submit" className="bg-[#4B4ACF] p-2 rounded-lg font-medium px-4" >
       
        Sign Up
      </button>
    </form>
  );
}