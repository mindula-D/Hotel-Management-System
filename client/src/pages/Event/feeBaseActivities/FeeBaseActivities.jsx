import React from "react";
import Sidebar from "../../../components/Event/siebar_event/Sidebar_event";
import Navbar from "../../../components/Event/navbar_event/Navbar_event";
import Path from "../../../components/Event/path_event/Path_feeBaseActivities";
import Menu from "../../../components/Event/menu_event/Menu_event";
import AddFeeBaseForm from "../../../components/Event/addFeeBaseForm/AddFeeBaseForm";

import "./feeBaseActivities.scss";
import ActivityTable from "../../../components/Event/activityTable/ActivityTable";

const FeeBaseActivities = () => {
  return (
    <div className="displayHome">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EVENT MANAGEMENT</h1>
        <Menu />
        <div className="description">
          <AddFeeBaseForm />
        </div>
      </div>
    </div>
  );
};

export default FeeBaseActivities;
