import { signIn } from "@/auth";
import googleImage from "../../public/google.png";

export default function GoogleSignIn() {




  return (
    <form className="w-[100%]" action={async () => {
        "use server"
         await signIn("google", { redirectTo: "/" });
       }}>
      <button type="submit" className="bg-gray-200 p-4 px-8 rounded-lg flex justify-center items-center gap-3 w-[100%] font-medium">
        <img src={googleImage.src} className="w-[20px] h-[20px]" />
        Sign Up with Google
      </button>
    </form>
  );
}