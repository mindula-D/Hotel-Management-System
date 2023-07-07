import React from "react";
import Sidebar from "../../../components/Event/siebar_event/Sidebar_event";
import Navbar from "../../../components/Event/navbar_event/Navbar_event";
import Path from "../../../components/Event/path_event/Path_recordTable";
import Menu from "../../../components/Event/menu_event/Menu_event";
//import SalaryForm from "../../components/SalaryForm";
import "./recordTable.scss";
//import { Table } from "@mui/material";

import Datatable from "../../../components/Event/datatable/DataTable";

const RecordTable = () => {
  return (
    <div className="recordTable">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title"> EVENT MANAGEMENT</h1>
        <Menu />
        <Datatable />
      </div>
    </div>
  );
};

export default RecordTable;
