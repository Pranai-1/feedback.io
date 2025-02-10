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
      <button type="submit" className="bg-[#202024] p-2 rounded-lg font-medium text-sm sm:text-base sm:px-4 w-max hover:border border-gray-400" >
       
        Sign In
      </button>
    </form>
  );
}