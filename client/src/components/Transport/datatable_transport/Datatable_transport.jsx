import "./datatable_transport.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Transport_userColoumns, userRows } from "../../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatable_transport = () => {
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch("/driver");
  //filtered by search

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  const [updatestate, setUpdatestate] = useState(-1);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    if (getSearch.length > 0) {
      const searchdata = list.filter((item) =>
        item.DriverID.includes(getSearch)
      );
      setList(searchdata);
    } else {
      setList(filterdata);
    }
  };

  //    const handlesearch1=(event1)=>{
  //     const getSearch = event1.target.value;
  //     setQuery(getSearch);
  //     if(getSearch.length > 0){
  //         const searchdata = list.filter((item)=> item.checkout.toLowerCase().
  //         includes(getSearch));
  //         setList(searchdata);
  //     }
  //     else{
  //         setList(filterdata);
  //     }

  // };

  useEffect(() => {
    setList(data);
    setFilterdata(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/driver/${id}`);
      setList(list.filter((item) => item._id !== id));
      // console.log(`${id}`);
    } catch (err) {}
  };

  function handleEdit(id) {
    setUpdatestate(id);
  }

  const actionColoumn = [
    {
      field: "action",
      width: 200,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              className="updateButton"
              type="button"
              to={`/transportation/DriverUpdatePage/${params.row._id}`}
            >
              Update
            </Link>
            <div className="viewButton">View</div>

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
    doc.text("Guest Drivers", 20, 10); //Duty Roster කියන එක වෙනුවට pdf එකේ එන්න ඕනෙ title එක දාගන්න
    doc.autoTable({
      theme: "grid",
      head: [
        [
          "Driver ID", /// මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "First Name", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Last Name", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Manufacturer", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Model", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Contact Number", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
        ],
      ],
      body: list.map((item) => [
        item.DriverID, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.DriverFirstName, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.DriverLastName, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.VehicleManufacture, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.VehicleModel, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.ContactNumber, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
      ]),
    });
    doc.save("Guest Drivers.pdf"); /// download වෙන pdf එකේ නම එන්න ඕනෙ විදිහ
  };

  const actions = [
    {
      icon: () => (
        <button onClick={downloadPdf} className="export">
          Get Guest Driver Details
        </button>
      ),
      tooltip: "Export to Pdf",
      isFreeAction: true,
    },
  ];
  return (
    <div className="datatableTP">
      <div className="datatableTitle">
        Guest Driver Record Details
        <Link
          to="/transportation/addDriver"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New Guest Driver
        </Link>
      </div>
      <input
        type="text"
        value={query}
        className="Search"
        onChange={(e) => handlesearch(e)}
        placeholder="Enter Driver ID"
      />
      {/* 
            <input  type="date" 
            value ={query}
            className="Search"
            onChange={(e)=>handlesearch1(e)}
            placeholder="Select Check Out Date"
            />  */}

      <DataGrid
        className="datagrid"
        rows={list}
        columns={Transport_userColoumns.concat(actionColoumn)}
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

export default Datatable_transport;
