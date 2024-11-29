import { RxDashboard } from "react-icons/rx";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiBoltCircle } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";


export const questionData=[
    {label:"Who are you / what are you working on?",id:0},
    {label:"How has [our product / service] helped you?",id:1},
    {label: "What is the best thing about [our product / service]?",id:2}
    ]

    export const fields = [
        { label: "Name", allowed: true, required: true, editable: false, id: 0 },
        { label: "Email", allowed: true, required: true, editable: true, id: 1 },
        { label: "Title, company", allowed: false, required: false, editable: true, id: 2 },
        { label: "Social link", allowed: false, required: false, editable: true, id: 3 },
        { label: "Address", allowed: false, required: false, editable: true, id: 4 },
      ];

      export const customDetails={
        headerTitle:"Your custom message goes here...",
        customMessage:'Your custom message goes here...'
      }

      export const sideBarNav = [
        { label: "Dashboard", path: "/", id: 0, icon: RxDashboard  },
        { label: "Pricing", path: "/pricing", id: 1, icon: HiOutlineCurrencyRupee  },
        { label: "About", path: "/about", id: 2, icon: BiBoltCircle  },
        { label: "Privacy Policy", path: "/privacy-policy", id: 3, icon: MdPrivacyTip  },
      ];