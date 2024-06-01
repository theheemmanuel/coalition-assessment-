/* eslint-disable react/prop-types */

import Profile from "./Profile";
import Diagnose from "./Diagnose";

const History = ({ Jessica }) => {
  return (
    <>
      <div className="w-[55%]">
        <Diagnose
          DiagnoseList={Jessica?.diagnostic_list}
          Respira={Jessica?.diagnosis_history}
          HeartRate={Jessica?.heart_rate}
        />
      </div>
      <div className="w-[20%]">
        <Profile
          img={Jessica?.profile_picture}
          proName={Jessica?.name}
          gender={Jessica?.gender}
          dob={Jessica?.date_of_birth}
          emergency={Jessica?.emergency_contact}
          phone={Jessica?.phone_number}
          insure={Jessica?.insurance_type}
          labresults={Jessica?.lab_results}
        />
      </div>
    </>
  );
};

export default History;
