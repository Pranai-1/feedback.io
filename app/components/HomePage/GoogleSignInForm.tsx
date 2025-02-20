import { signIn } from "@/auth";
import googleImage from "../../public/google.png";
import Image from "next/image";

export default function GoogleSignIn() {




  return (
    <form className="w-[100%]" action={async () => {
        "use server"
         await signIn("google", { redirectTo: "/" });
       }}>
      <button type="submit" className="bg-gray-200 p-4 px-8 rounded-lg flex justify-center items-center gap-3 w-[100%] font-medium">
      <Image src={googleImage.src} className="w-[20px] h-[20px]" alt="logo" width={20} height={20} />
        Sign Up with Google
      </button>
    </form>
  );
}