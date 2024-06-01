/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import History from "./History";
import Navabr from "./Navabr";
import Sidebar from "./Sidebar";
import axios from "axios";

function App() {
  const [patients, SetPatients] = useState([]);
  const [selectedName, setSelectedName] = useState("Jessica Taylor");
  useEffect(() => {
    const username = "coalition";
    const Password = "skills-test";
    const token = window.btoa(`${username}:${Password}`);
    axios
      .get("https://fedskillstest.coalitiontechnologies.workers.dev", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        SetPatients(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleClick = (eventt) => {
    setSelectedName(eventt.target.textContent);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const Jessica = patients.find((patient) => patient.name === selectedName);
  console.log(Jessica);
  return (
    <>
      <Navabr />
      <div className="flex gap-6">
        <Sidebar setList={handleClick} />
        <History Jessica={Jessica} />
      </div>
    </>
  );
}

export default App;
