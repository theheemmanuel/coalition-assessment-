/* eslint-disable react/prop-types */
import DOB from "../src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png";
import Gender from "../src/assets/FemaleIcon@2x.png";
import Call from "../src/assets/PhoneIcon@2x.png";
import Insuree from "../src/assets/InsuranceIcon@2x.png";
import Download from "../src/assets/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png";
const Profile = ({
  img,
  proName,
  dob,
  gender,
  phone,
  emergency,
  insure,
  labresults,
}) => {
  return (
    <div className="">
      <div className="bg-white p-4 rounded-xl mb-4">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[200px]" src={img} alt="" />
          <h3 className="text-[24px] font-bold">{proName}</h3>
        </div>
        <div>
          <div className="flex gap-4 my-3 items-center">
            <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#f6f7f8] rounded-full">
              <img className="h-[20px]" src={DOB} alt="" />
            </div>
            <div>
              <p>Date of Birth</p>
              <p className="font-bold">{dob}</p>
            </div>
          </div>
          <div className="flex gap-4 my-3 items-center">
            <img className="h-[40px]" src={Gender} alt="" />
            <div>
              <p>Gender</p>
              <p className="font-bold">{gender}</p>
            </div>
          </div>
          <div className="flex gap-4 my-3 items-center">
            <img className="h-[40px]" src={Call} alt="" />
            <div>
              <p>Contact Info</p>
              <p className="font-bold">{phone}</p>
            </div>
          </div>
          <div className="flex gap-4 my-3 items-center">
            <img className="h-[40px]" src={Call} alt="" />
            <div>
              <p>Emergency Contact</p>
              <p className="font-bold">{emergency}</p>
            </div>
          </div>
          <div className="flex gap-4 my-3 items-center">
            <img className="h-[40px]" src={Insuree} alt="" />
            <div>
              <p>Insurance Provider</p>
              <p className="font-bold">{insure}</p>
            </div>
          </div>
          <div className="mx-auto w-[220px]">
            <button className="bg-[#01F0D0] px-4 rounded-xl text-center w-full">
              Show All Information
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl my-4">
        <h3 className="text-[24px] font-bold">Lab Results</h3>
        <div className="p-2">
          {labresults?.map((res, id) => (
            <div
              key={id}
              className="flex justify-between items-center hover:bg-[#f6f7f8] p-2"
              role="button"
            >
              <p className="text-[14px]">{res}</p>
              <img className="w-[20px]" src={Download} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
