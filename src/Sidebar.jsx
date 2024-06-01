/* eslint-disable react/prop-types */
import Pic1 from "../src/assets/Layer1.png";
import Pic2 from "../src/assets/Layer2.png";
import Pic3 from "../src/assets/Layer3.png";
import Pic4 from "../src/assets/Layer4.png";
import Pic5 from "../src/assets/Layer5.png";
import Pic6 from "../src/assets/Layer6.png";
import Pic7 from "../src/assets/Layer7.png";
import Pic8 from "../src/assets/Layer8.png";
import Pic9 from "../src/assets/Layer9.png";
import Pic10 from "../src/assets/Layer10.png";
import Pic11 from "../src/assets/Layer11.png";
import Pic12 from "../src/assets/Layer12.png";
import Search from "../src/assets/search_FILL0_wght300_GRAD0_opsz24@2x.png";
const Patients = [
  { image: Pic1, name: "Emily Williams", gender: "Female", age: 18 },
  { image: Pic2, name: "Ryan Johnson", gender: "Male", age: 45 },
  { image: Pic3, name: "Brandon Mitchell", gender: "Male", age: 36 },
  { image: Pic4, name: "Jessica Taylor", gender: "Female", age: 28 },
  { image: Pic5, name: "Samantha Johnson", gender: "Female", age: 56 },
  { image: Pic6, name: "Ashley Martinez", gender: "Female", age: 54 },
  { image: Pic7, name: "Olivia Brown", gender: "Female", age: 32 },
  { image: Pic8, name: "Tyler Davis", gender: "Male", age: 19 },
  { image: Pic9, name: "Kevin Anderson", gender: "Male", age: 30 },
  { image: Pic10, name: "Dylan Thompson", gender: "Male", age: 36 },
  { image: Pic11, name: "Nathan Evens", gender: "Male", age: 58 },
  { image: Pic12, name: "Mike Nolan", gender: "Male", age: 31 },
];
const Sidebar = ({ setList }) => {
  return (
    <>
      <div className="w-[20%] bg-white py-6 px-2 rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-[24px] font-bold">Patients</p>
          <img className="h-[18px]" src={Search} alt="" />
        </div>
        <div className="py-4">
          {Patients.map((e) => (
            <div key={e.name} className="flex gap-2 my-4 hover:bg-[#f6f7f8]">
              <img className="h-[44px]" src={e.image} alt="" />
              <div>
                <p
                  onClick={setList}
                  className="text-[14px] font-bold"
                  role="button"
                >
                  {e.name}
                </p>
                <p className="text-[14px]">
                  {e.gender}, {e.age}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
