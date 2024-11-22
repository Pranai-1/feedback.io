import HeaderBody from "./HeaderBody";

export default function BasicPageInput(){
    return(
        <>
        <label htmlFor="spaceName" className="flex justify-center items-center gap-2 text-[#1a1b1c]">Space name
        <p className="text-red-600">*</p></label>
    <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-2" type="text" name="spaceName" id="spaceName"/>
    <p className="text-[#55595F] text-[12px]">Public URL is:https://feedback-io-bice.vercel.app/your-space</p>

    <label htmlFor="spaceLogo" className="flex justify-center items-center gap-2 text-[#1a1b1c]  mt-2">Space logo
        <p className="text-red-600">*</p></label>
    <input className="w-full p-1 rounded-lg mt-1" type="file" name="spaceLogo" id="spaceLogo"/>
    <HeaderBody/>
    </>
    )
}