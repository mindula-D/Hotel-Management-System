import "./datatablestaff_transport.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  TransportStaff_userColoumns,
  userRows,
} from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatablestaff_transport = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/staff");
  //filtered by search

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  const [updatestate, setUpdatestate] = useState(-1);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);
    if (getSearch.length > 0) {
      const searchdata = list.filter((item) =>
        item.StaffDriverID.includes(getSearch)
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
      await axios.delete(`/staff/${id}`);
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
              to={`/transportation/StaffUpdatePage/${params.row._id}`}
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
    doc.text("Staff Drivers", 20, 10); //Duty Roster කියන එක වෙනුවට pdf එකේ එන්න ඕනෙ title එක දාගන්න
    doc.autoTable({
      theme: "grid",
      head: [
        [
          "Driver ID", /// මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "First Name", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Last Name", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Vehicle", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Pick-Up Point", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
          "Pick-Up Time", ///මේ fields ටිකට pdf එකේ එන්න ඕන table එකේ headings ටික දාගන්න
        ],
      ],
      body: list.map((item) => [
        item.StaffDriverID, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.StaffDriverFirstName, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.StaffDriverLastName, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.Vehicle, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.StartingPoint, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
        item.StartingTime, /// මෙතනට item.ඇත්ත variable එක දාන්න (form එකේ useState වල දාපු)
      ]),
    });
    doc.save("Staff Drivers.pdf"); /// download වෙන pdf එකේ නම එන්න ඕනෙ විදිහ
  };

  const actions = [
    {
      icon: () => (
        <button onClick={downloadPdf} className="export">
          Get Staff Driver Details
        </button>
      ),
      tooltip: "Export to Pdf",
      isFreeAction: true,
    },
  ];
  return (
    <div className="datatableTP">
      <div className="datatableTitle">
        Staff Driver Record Details
        <Link
          to="/transportation/staffTransport"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New Staff Driver
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
        columns={TransportStaff_userColoumns.concat(actionColoumn)}
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

export default Datatablestaff_transport;
