import { signOut } from "@/auth"

export default function SignoutButton() {
    async function handleSignOut() {
        "use server";
        await signOut();
    }

    return (
        <form action={handleSignOut}>
            <button className="bg-[#4B4ACF] p-2 rounded-lg font-medium px-4" type="submit">
                Signout
            </button>
        </form>
    );
}
