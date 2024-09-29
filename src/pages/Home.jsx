import React, { useEffect, useState } from "react";
import { NameAndSearch, Search} from "../Components";
import HomeStays from "../Components/HomeStay";
import HomeStayService from "../services/homestay.service";
import Swal from "sweetalert2";
function Home() {
  const [homestays, setHomeStays] = useState([]);
  const [filteredHomeStays, setFilteredHomeStays] = useState([]);
  useEffect(() => {
    const getHomeStays = async () => {
      try {
      const response = await HomeStayService.getAllHomeStay();
      if (response.status ===200) {
        setHomeStays(response.data);
        setFilteredHomeStays(response.data);
      }
    } catch (error) {
      Swal.fire({
        title: "Get All HomeStay",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };
  getHomeStays();
  },[]);
  return (
    <>
      <div className="container">
        <NameAndSearch />
        
        <Search homestays={homestays} setFilteredHomeStays={setFilteredHomeStays}/>
        <HomeStays homestays={filteredHomeStays}/>
      </div>
    </>
  );
}
// export default function Home() {
//   const [homestays, setHomeStays] = useState([]);
//   const [filteredHomeStays, setFilteredHomeStays] = useState([]);
//   useEffect(() => {

//     // fetch("http://localhost:5000/homestays")
//     //   .then((res) => {
//     //     return res.json();
//     //   })
//     //   .then((response) => {
//     //     setHomeStays(response);
//     //     setFilteredHomeStays(response);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err.message);
//     //   });
//   }, []);

export default Home;
  


