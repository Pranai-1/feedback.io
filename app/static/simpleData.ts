import { RxDashboard } from "react-icons/rx";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiBoltCircle } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

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

      export const feedbackSideBarInbox=[
        { label: "All",  id: 0, icon: MdOutlineEmail  },
        { label: "Video", id: 1, icon: CiVideoOn  },
        { label: "Text",  id: 2, icon: LuMessageSquare  },
        { label: "Liked",  id: 3, icon: CiHeart  },
      ]

       const feedbackSideBarWidget=[
        { label: "Wall of Love",  id: 0, icon: CiHeart  },
        { label: "Badge", id: 1, icon: CiStar  },

      ]

       const feedbackSideBarIntegrations=[
        { label: "X (Twitter)",  id: 0, icon: FaXTwitter  },
        { label: "Instagram", id: 1, icon: FaInstagram  },

      ]

       const feedbackSideBarPages=[
        { label: "Request Testimonials",  id: 0, icon: FaXTwitter  },
        { label: "Wall of love", id: 1, icon: IoMdSend  },

      ]

       const feedbackSideBarAnalytics=[
        { label: "Metrics",  id: 0, icon:SiSimpleanalytics  },
        

      ]

       const feedbackSideBarSpaceSettings=[
        { label: "Edit the space",  id: 0, icon: FaEdit  },
        { label: "Invite people to this space", id: 1, icon: FaUserFriends  },

      ]

      export const feedbackSideBarExtensionValues=[feedbackSideBarWidget,feedbackSideBarIntegrations,feedbackSideBarPages,feedbackSideBarAnalytics,feedbackSideBarSpaceSettings]
      export const feedbackSideBarExtension=[
        { label: "Embed Widgets",  id: 0, icon: MdKeyboardArrowRight  },
        { label: "Integrations", id: 1, icon: MdKeyboardArrowRight  },
        { label: "Pages",  id: 2, icon: MdKeyboardArrowRight  },
        { label: "Analytics", id: 3, icon: MdKeyboardArrowRight  },
        { label: "Space settings",  id: 4, icon: MdKeyboardArrowRight  },
      ]


      export const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // Allowed formats
      export const maxSizeInMB = 3;