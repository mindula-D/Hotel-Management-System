import "./datatableKT.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColoumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
//pdf
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatable = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/food");
  //filtered by search

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  const [updatestate, setUpdatestate] = useState(-1);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    if (getSearch.length > 0) {
      const searchdata = list.filter((item) =>
        item.foodName.toLowerCase().includes(getSearch)
      );
      setList(searchdata);
    } else {
      setList(filterdata);
    }
  };

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
        confirmButtonColor: "#10A19D",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/food/${id}`);
          setList(list.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {}
  };

  function handleEdit(id) {
    setUpdatestate(id);
  }

  const actionColoumn = [
    {
      field: "action",
      width: 150,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{textDecoration:"none"}}>
                <div className="viewButton" onClick={()=> handleEdit(params.row
                    ._id)}> Update</div>
                </Link> */}
            <Link
              className="updateButton"
              type="button"
              to={`/kitchen/update/${params.row._id}`}
            >
              Update
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
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
    doc.setFontSize(28);
    doc.text("Food stock details", 120, 45);
    doc.autoTable({
      theme: "grid",
      head: [["Food Name", "Type", "Quantity", "Unit price", "Date"]],
      body: list.map((item) => [
        item.foodName,
        item.type,
        item.quantity,
        item.unitPrice,
        item.date,
      ]),
      margin: { top: 50 },
    });
    doc.save("Stock Details.pdf");
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
    <div className="datatableKT">
      <div className="datatableTitle">
        Food Stock Details
        <Link
          to="/kitchen/addfood/"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <input
        type="text"
        value={query}
        className="Search"
        onChange={(e) => handlesearch(e)}
        placeholder="Search by food name"
      />

      <DataGrid
        className="datagrid"
        rows={list}
        columns={userColoumns.concat(actionColoumn)}
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
