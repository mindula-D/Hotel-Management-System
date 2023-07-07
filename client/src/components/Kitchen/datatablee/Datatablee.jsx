import "./datatablee.scss";
import { DataGrid } from "@mui/x-data-grid";
import { countColoumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatablee = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/foodCount");
  //filtered by search

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  const [updatestate, setUpdatestate] = useState(-1);
  const [foodStock, setFoodStock] = useState([]); //cal

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    if (getSearch.length > 0) {
      const searchdata = list.filter((item) =>
        item.foodNameCount.toLowerCase().includes(getSearch)
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
          axios.delete(`/foodCount/${id}`);
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
    const doc = new jsPDF();
    doc.text("Food stock details", 20, 10);
    doc.autoTable({
      theme: "grid",
      head: [["Name", "Type", "Date", "Quantity"]],
      body: list.map((item) => [
        item.foodNameCount,
        item.typeCount,
        item.date,
        item.availability,
      ]),
    });
    doc.save("Stock count Details.pdf");
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
    <div className="datatableKT2">
      <div className="datatableTitle">
        Food Count Details
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
        placeholder="Search by food ID"
      />

      <DataGrid
        className="datagrid"
        rows={list}
        columns={countColoumns.concat(actionColoumn)}
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

export default Datatablee;
