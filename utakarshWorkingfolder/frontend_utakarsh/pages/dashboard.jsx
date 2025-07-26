// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import React from "react";
export default function Dashboard() {
  //   const [data, setData] = useState("");
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     const fetchProtectedData = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/protected", {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         });
  //         setData(res.data.message);
  //       } catch (err) {
  //         alert("Unauthorized or session expired. Please login again.");
  //         navigate("/login");
  //       }
  //     };

  //     fetchProtectedData();
  //   }, [navigate]);

  //   const handleLogout = () => {
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   };

  return (
    <>
      <div className="max-w-1/2 mx-auto mt-20 p-8 bg-white rounded-lg shadow-xl flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Blog</h2>
        <p className="text-gray-700 text-lg min-h-[2rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quas
          blanditiis aliquid fuga esse debitis, soluta perferendis molestias eum
          assumenda ex, dolorum cupiditate aut minus exercitationem possimus
          porro? Cumque, vitae.
        </p>
      </div>
      <div className="max-w-1/2 mx-auto mt-20 p-8 bg-white rounded-lg shadow-xl flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Blog</h2>
        <p className="text-gray-700 text-lg min-h-[2rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quas
          blanditiis aliquid fuga esse debitis, soluta perferendis molestias eum
          assumenda ex, dolorum cupiditate aut minus exercitationem possimus
          porro? Cumque, vitae.
        </p>
      </div>
      <div className="max-w-1/2 mx-auto mt-20 p-8 bg-white rounded-lg shadow-xl flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Blog</h2>
        <p className="text-gray-700 text-lg min-h-[2rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quas
          blanditiis aliquid fuga esse debitis, soluta perferendis molestias eum
          assumenda ex, dolorum cupiditate aut minus exercitationem possimus
          porro? Cumque, vitae.
        </p>
      </div>
    </>
  );
}
