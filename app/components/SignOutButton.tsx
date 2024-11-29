import { signOut } from "@/auth"

export default function SignoutButton() {
    async function handleSignOut() {
        "use server";
        await signOut();
    }

    return (
        <form action={handleSignOut}>
            <button className="bg-[#741C1C] p-2 rounded-lg font-medium px-2 sm:px-4 text-xs sm:text-sm" type="submit">
                Signout
            </button>
        </form>
    );
}
