import logo from "../src/assets/TestLogo.png";
import Doc1 from "../src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import Set from "../src/assets/settings_FILL0_wght300_GRAD0_opsz24@2x.png";
import MoreVent from "../src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.png";
import Over from "../src/assets/home_FILL0_wght300_GRAD0_opsz24@2x.png";
import Patient from "../src/assets/group_FILL0_wght300_GRAD0_opsz24@2x.png";
import Schedule from "../src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png";
import Message from "../src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png";
import Card from "../src/assets/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png";

const Navabr = () => {
  return (
    <div className="flex justify-between bg-white m-4 px-4 py-2 rounded-[50px] items-center">
      <img src={logo} alt="" />
      <div className="flex list-none bg-white gap-6">
        <li className="flex items-center gap-2 px-2">
          <img className="w-[15px]" src={Over} alt="" />
          Overview
        </li>
        <li className="flex items-center gap-2 px-2 bg-[#01F0D0] rounded-xl">
          <img className="w-[15px]" src={Patient} alt="" />
          Patients
        </li>
        <li className="flex items-center gap-2 px-2">
          <img className="w-[15px]" src={Schedule} alt="" />
          Schedule
        </li>
        <li className="flex items-center gap-2 px-2">
          <img className="w-[15px]" src={Message} alt="" />
          Message
        </li>
        <li className="flex items-center gap-2 px-2">
          <img className="w-[15px]" src={Card} alt="" />
          Transactions
        </li>
      </div>
      <div className="flex items-center gap-2 px-2">
        <img className="w-[44px]" src={Doc1} alt="" />
        <div className="flex flex-col">
          <p className="font-bold m-0 p-0 text-[14px]">Dr. jose Simmons</p>
          <p className="font-thin m-0 p-0 text-[14px]">General Practitioner</p>
        </div>
        <img className="h-[18px]" src={Set} alt="" />
        <img className="h-[18px]" src={MoreVent} alt="" />
      </div>
    </div>
  );
};

export default Navabr;
