// import React, { useEffect } from "react";
import Sidebar from "../../../components/Kitchen/siebar_kitchen/Sidebar_kitchen";
import Navbar from "../../../components/Kitchen/navbar_kitchen/Navbar_kitchen";
import Path from "../../../components/Kitchen/path_kitchen/Path_kitchen_foodStockDetails";
import Menu from "../../../components/Kitchen/menu_kitchen/Menu_kitchen";
import "./foodStockDetails.scss";
import Datatable from "../../../components/Kitchen/datatable/Datatable";
// import { useEffect,useState } from "react";

const FoodStockDetails = () => {
  // const [foods, setFoods]= useState(null)
  // useEffect(()=>{
  //      const fetchFood = async()=>{
  //      const response = await fetch('http://localhost:8070/food')
  //      const json = await response.json()

  //      if(response.ok){
  //        setFoods(json)
  //      }
  //      }
  //      fetchFood()
  // },[])
  return (
    <div className="foodStockDetails">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <Menu />

        <Datatable />
        {/* <table style={{width:1000}}>
          <tr>
            <th>Food Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </table> */}
        {/* <div className="foods">
          {foods && foods.map((food)=> (
            <p Key={food._id}> {food.title}</p>
          ))} 
        </div> */}
      </div>
    </div>
  );
};

export default FoodStockDetails;
