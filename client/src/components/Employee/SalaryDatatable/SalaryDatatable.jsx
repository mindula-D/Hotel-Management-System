import "./salaryDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { EmployeeSalaryColoumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

const SalaryDatatable = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/salary/");
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
          axios.delete(`/salary/${id}`);
          setList(list.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {}
  };

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    //console.log(getSearch);

    if (getSearch.length > 0) {
      const searchData = list.filter((item) =>
        item.employeeid.toLowerCase().includes(getSearch)
      );
      setList(searchData);
    } else {
      setList(filterdata);
    }
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Salary details", 20, 10);
    doc.autoTable({
      theme: "grid",
      head: [
        [
          "Employee ID",
          "Basic Salary",
          "Allowance",
          "OverTime",
          "Attendence",
          "Total Salary",
        ],
      ],
      body: list.map((item) => [
        item.employeeid,
        item.basicSalary,
        item.allowance,
        item.overtime,
        item.attendance,
        item.totalSalary,
      ]),
    });
    doc.save("Salary Details.pdf");
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

  const actionColoumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}></Link>
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
  return (
    <div className="datatableEM">
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={query}
        onChange={(e) => handleSearch(e)}
      />

      <DataGrid
        className="datagrid"
        rows={list}
        columns={EmployeeSalaryColoumns.concat(actionColoumn)}
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

export default SalaryDatatable;
