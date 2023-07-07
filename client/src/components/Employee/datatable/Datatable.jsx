import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { EmployeeColoumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

const Datatable = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/employee/");
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
          axios.delete(`/employee/${id}`); //delete
          setList(list.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {}
  };

  //search

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    //console.log(getSearch);

    if (getSearch.length > 0) {
      const searchData = list.filter((item) =>
        item.employeeID.toLowerCase().includes(getSearch)
      );
      setList(searchData);
    } else {
      setList(filterdata);
    }
  };

  const actionColoumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
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
              to={`/employees/updateEmployees/${params.row._id}`}
            >
              {" "}
              Update
            </Link>
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
        columns={EmployeeColoumns.concat(actionColoumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
