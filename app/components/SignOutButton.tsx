import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export default function SignoutButton() {
  async function handleSignOut() {
    "use server";
    try {
      await signOut();
    } catch (error) {
      console.error("Error during signOut:", error);
    }
    return redirect("/");
  }

  return (
    <form action={handleSignOut}>
      <button
        className="bg-[#741C1C] p-2 rounded-lg font-medium px-2 sm:px-4 text-xs sm:text-sm"
        type="submit"
      >
        Signout
      </button>
    </form>
  );
}
