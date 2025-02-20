

export default function CustomSignup() {
    async function loginAction(formData: FormData) {
        "use server";
        console.log(formData);
    }

    return (
        <form action={loginAction}>
            <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="firstName">First name *</label>
                    <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email">Email *</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="password">Password *</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
                </div>

                <button
                    className="bg-[#5D5DFF] w-full rounded-lg font-medium text-center text-white p-2 py-4 mt-3 text-lg"
                    type="submit"
                >
                    Signup
                </button>
            </div>
        </form>
    );
}
