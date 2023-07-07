import "./reportTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColoumnsEV, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import axios from "axios";
import "jspdf-autotable";
import jsPDF from "jspdf";

const ReportTable = () => {
  const [list, setList] = useState("");

  const { data, loading, error } = useFetch("/event");

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setList(data);
    setFilterdata(data);
  }, [data]);

  const handleUpdate = async (id) => {
    try {
      const response = await axios.get(`/event/${id}`);
      console.log(response.data);
      setList(list.filter((item) => item._id !== id));
      return response.data;
    } catch (err) {}
  };

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchdata = list.filter((item) => item.date.includes(getSearch));

      setList(searchdata);
      //setList(searchdataz);
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
          "phone_number",
          "Date",
          "Time Slot",
          "Funtion Type",
          "email",
          "hall",
          "Total Count",
          "Total Amount",
        ],
      ],
      body: list.map((item) => [
        item.customer_name,
        item.phone_number,
        item.date,
        item.timeSlot,
        item.function_type,
        item.email,
        item.hall_type,
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
    <div className="reportTable">
      <div className="reportTableTitle">Report Genarate</div>
      <input
        type="text"
        value={query}
        className="Search"
        onChange={(e) => handlesearch(e)}
        placeholder="Search By Date.."
      />

      <DataGrid
        className="datagrid"
        rows={list}
        columns={userColoumnsEV.concat(actionColoumn)}
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

export default ReportTable;
