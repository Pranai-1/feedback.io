export default function HeaderBody(){
    return(
        <>
            <label htmlFor="headerTitle" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Header title 
                <p className="text-red-600">*</p></label>
            <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1" type="text" name="headerTitle" id="headerTitle"
            placeholder="Would you like to give a shoutout for xyz?"/>

            <label htmlFor="customMsg" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Your custom message
                <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1"  name="customMsg" id="customMsg"
            placeholder="Write a warm message for your customers"></textarea>
        </>
    )
}