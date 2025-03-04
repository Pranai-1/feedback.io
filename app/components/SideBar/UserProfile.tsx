import { fetchUserData } from "@/lib/dataFetch"
import Image from "next/image"
export default async function UserProfile(){
    const {user,spaces}=await fetchUserData()
    return(
        <div className="w-[100%] flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center w-[100%] gap-2">
                <p className="text-gray-200 text-sm font-medium flex justify-between items-center w-[90%]">Spaces limit<span>{spaces.length}/3</span></p>
                <div className="w-[90%] bg-[#323232] rounded-lg h-4">
                  <p className="h-full rounded-lg"  style={{
                    width: `${Math.min((spaces?.length || 0) / 3 * 100, 100)}%`, // Ensure max 100%
                    backgroundColor: "white",
                    }}></p>
                </div>

            </div>
         <div className="w-[90%] border border-gray-400 p-2 flex justify-center items-center gap-2">
            <Image src={user?.image || ""} alt="profile" width={20} height={20}/>
        </div>
        </div>
       
    )
}