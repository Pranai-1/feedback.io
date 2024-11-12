
import googleImage from "../../public/google.png"
export default function Signup(){

    async function loginAction(formData:FormData){
      "use server"
        console.log(formData)
        }
   
    return(
        <div className="p-3 bg-black flex justify-center h-screen flex-wrap">
           
            <div className="w-[250px] sm:w-[450px] h-max mt-10 bg-[#FFFFFF] p-5 rounded-lg px-10">
            <form action={loginAction}>
                <div className="flex flex-col justify-start  items-start gap-3">
               
                    <div className="flex flex-col gap-2 w-[100%]">
                        <label htmlFor="firstName">First name *</label>
                        <input name="firstName" id="firstName" type="text" placeholder="Your first Name"
                        className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF] "/>
                    </div>
                    <div className="flex flex-col gap-2 w-[100%]">
                        <label htmlFor="email">Email *</label>
                        <input name="email" id="email" type="email" placeholder="you@example.com"
                         className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"/>
                    </div>
                    <div className="flex flex-col gap-2 w-[100%]">
                        <label htmlFor="password">Password *</label>
                        <input name="password" id="password" type="password" placeholder="Password"
                         className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"/>
                    </div>
                    <button className="bg-[#5D5DFF] w-full rounded-lg font-medium text-center text-white p-2 py-4 mt-3 text-lg"
                    type="submit">Signup</button>
                   
                   
                </div>
                </form>
                <div className="mt-6 w-[100%] flex flex-col gap-3 items-center justify-center">
                        <p className="text-center">OR</p>
                        <button className="bg-gray-200 p-4 px-8 rounded-lg flex justify-center items-center gap-3 w-[100%]">
                            <img src={googleImage.src} className="w-[20px] h-[20px]"/>Sign Up with Google</button>
                    </div>
            </div>
          
        </div>
    )
}
