/* eslint-disable react/prop-types */
import Resp from "../src/assets/respiratory rate@2x.png";
import Temp from "../src/assets/temperature@2x.png";
import Heart from "../src/assets/HeartBPM@2x.png";
import BloodPressureChart from "./BloodPressureChart";
const Diagnose = ({ DiagnoseList, Respira }) => {
  const labels = Respira?.slice(0, 6).map((bp) => `${bp.month} ${bp.year}`);
  const systolicData = Respira?.map((bp) => bp.blood_pressure);
  const diastolicData = Respira?.map((bp) => bp.blood_pressure);
  return (
    <div>
      <div className="bg-[#F4F0FE] rounded-xl py-8 px-4 mb-6">
        <h3 className="text-[18px] font-bold py-4">Blood Pressure</h3>
        <BloodPressureChart
          labels={labels}
          systolicData={systolicData?.map((e) => e.systolic.value)}
          diastolicData={diastolicData?.map((e) => e.diastolic.value)}
        />
      </div>
      <div className="bg-white rounded-xl py-8 px-4 mb-6">
        <div className="flex gap-4 justify-around">
          {Respira?.slice(0, 1).map((rach) => (
            <div
              key={rach.id}
              className="rounded-xl w-[258px] h-[242px] bg-[#E0F3FA] p-6"
            >
              <img className="w-[100px]" src={Resp} alt="" />
              <p>Respiratory Rate</p>
              <h3 className="font-bold text-[30px]">
                {rach.respiratory_rate.value} bpm
              </h3>
              <p className="text-[14px]">{rach.respiratory_rate.levels}</p>
            </div>
          ))}

          {Respira?.slice(0, 1).map((temp) => (
            <div
              key={temp.id}
              className="rounded-xl w-[258px] h-[242px] bg-[#FFE6E9] p-6"
            >
              <img className="w-[100px]" src={Temp} alt="" />
              <p>Temperature</p>
              <h3 className="font-bold text-[30px]">
                {temp.temperature.value}°F
              </h3>
              <p className="text-[14px]">{temp.temperature.levels}</p>
            </div>
          ))}
          {Respira?.slice(0, 1).map((heart) => (
            <div
              key={heart.id}
              className="rounded-xl w-[258px] h-[242px] bg-[#FFE6F1] p-6"
            >
              <img className="w-[100px]" src={Heart} alt="" />
              <p>Heart Rate</p>
              <h3 className="font-bold text-[30px]">
                {heart.heart_rate.value} bpm
              </h3>
              <p className="text-[14px]">{heart.heart_rate.levels} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl py-8 px-4 my-4">
        <h3 className="font-bold text-[24px]">Diagnostic List</h3>
        <div className="my-6">
          <table width="100%" className="text-left">
            <thead>
              <tr className="bg-[#f6f7f8] text-[14px]">
                <th className="px-4 py-2">Problem/Diagnosis</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {DiagnoseList?.map((list, key) => (
                <tr key={key} className="hover:bg-[#f6f7f8]" role="button">
                  <td className="py-3 px-4">{list.name}</td>
                  <td className="py-3 px-4">{list.description}</td>
                  <td className="py-3 px-4">{list.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Diagnose;
