import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function NotImplemented() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-[90%] ml-4 md:ml-10 rounded-md py-2 flex-wrap h-[80vh]">
      <div className="text-center p-8 bg-white rounded-2xl shadow-2xl w-full max-w-lg">
      <p className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
        We&apos;re Working on It!
    </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6">
          This feature is currently under development. Thank you for your patience!
        </p>

        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6">
          Need support or have questions? Contact me through the following channels:
        </p>
        <div className="flex justify-center items-center">
       <div className="flex flex-col justify-start items-center w-max">
        <div className="flex justify-center gap-6 mb-6 w-full">
          <a
            href="mailto:reddypranai2017@gmail.com"
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaEnvelope className="mr-3 text-2xl" />
            Email: <span className="text-sm">reddypranai2017@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-start gap-6 w-full">
          <a
            href="https://x.com/RDugginen"
            target="_blank"
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="mr-3 text-2xl" />
            X: <span className="text-sm">@RDugginen</span>
          </a>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
