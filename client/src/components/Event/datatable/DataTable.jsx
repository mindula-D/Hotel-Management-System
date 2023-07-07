import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { calColoumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
//import { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Swal from "sweetalert2";
import axios from "axios";
import "jspdf-autotable";
import jsPDF from "jspdf";

const Datatable = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/event");

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setList(data);
    setFilterdata(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/event/${id}`);
          setList(list.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {}
  };

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchdata = list.filter((item) => item.date.includes(getSearch));
      // const searchdata2 = list.filter( (item)=> item.hall_type.includes(getSearch) );

      setList(searchdata);
      // setList(searchdata2);
    } else {
      setList(filterdata);
    }
  };

  const actionColoumn = [
    {
      field: "action",
      width: 150,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            <Link
              className="updateButton"
              type="button"
              to={`/event/update/${params.row._id}`}
            >
              Update
            </Link>
          </div>
        );
      },
    },
  ];
  const downloadPdf = () => {
    const doc = new jsPDF("l", "", "a4");
    doc.setFontSize(23);
    doc.text("Hotel Silver Sands\n", 220, 15);
    doc.setFontSize(12);
    doc.text(
      "\n229 Lewis Place, Negombo\nTel:+94 31 222 2880\nFax:+94 31 223 7364\nEmail: hotelsilversands@gmail.com",
      220,
      17
    );
    doc.setFontSize(16);
    doc.text("EVENT  DETAILS", 120, 45);

    doc.autoTable({
      theme: "grid",
      head: [
        [
          "Name",
          "Date",
          "Time Slot",
          "Funtion Type",
          "Fee-Base Chareges",
          "Plate Price",
          "Total Count",
          "Total Amount",
        ],
      ],
      body: list.map((item) => [
        item.customer_name,
        item.date,
        item.timeSlot,
        item.function_type,
        item.fee_based_Activities,
        item.plate_type,
        item.total_count,
        item.totalSalary,
      ]),
      margin: { top: 50 },
    });
    doc.save("Event Details.pdf");
  };

  const actions = [
    {
      icon: () => (
        <button onClick={downloadPdf} className="export">
          Download PDF
        </button>
      ),
      tooltip: "Export to Pdf",
      isFreeAction: true,
    },
  ];

  return (
    <div className="datatableCal">
      <div className="datatableTitle">
        Data Table
        <Link
          to="/event/addEvent"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <div className="search">
        <input
          type="text"
          value={query}
          className="Search"
          onChange={(e) => handlesearch(e)}
          placeholder="Search by Date"
        />
      </div>

      <DataGrid
        className="datagrid"
        rows={list}
        columns={calColoumns.concat(actionColoumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
        components={{
          Toolbar: () => (
            <div>
              {actions.map((action, index) => (
                <action.icon key={index} onClick={action.onClick} />
              ))}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Datatable;
