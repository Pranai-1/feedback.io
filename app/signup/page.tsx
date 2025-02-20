

// import CustomSignup from "../components/CustomSignup"
import GoogleSignIn from "../components/HomePage/GoogleSignInForm"

export default function Signup(){

   
    return(
        <div className="p-3 bg-black flex justify-center h-screen flex-wrap">
           
            <div className="w-[250px] sm:w-[450px] h-max mt-10 bg-[#FFFFFF] p-5 rounded-lg px-10">
                {/* <p className="text-xl m-5 text-center font-medium">Register with your email</p>
             <CustomSignup/>
                <div className="mt-6 w-[100%] flex flex-col gap-3 items-center justify-center">
                        <p className="text-center font-medium">OR</p> */}
                 <GoogleSignIn/>
                        
                    {/* </div> */}
            </div>
          
        </div>
    )
}
