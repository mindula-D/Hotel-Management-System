import "./paymentDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { paymentUserColoumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
import "jspdf-autotable";

const PaymentDatatable = () => {
  const [list, setList] = useState("");
  const { data, loading, error } = useFetch("/payment");
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
          axios.delete(`/payment/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`${id}`);
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
        item.paymentDate.toLowerCase().includes(getSearch)
      );
      setList(searchData);
    } else {
      setList(filterdata);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link
              to="/payment/paymentRecords/paymentUpdate"
              style={{ textDecoration: "none" }}
             >
              <div className="viewButton">Update</div>
            </Link> */}
            <Link
              className="updateButton"
              type="button"
              to={`/payment/paymentUpdate/${params.row._id}`}
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

  // const downloadPdf = () => {
  //   const doc = new jsPDF();
  //   doc.text("Payment Report", 20, 10);
  //   doc.autoTable({
  //     theme: "grid",
  //     head: [
  //       [
  //         "Payment ID",  //Headings
  //         "Customer Name",
  //         "Email",
  //         "Contact Number",
  //         "Date",
  //         "Total Amount",
  //         "Payment Method",
  //       ],
  //     ],
  //     body: list.map((item) => [
  //       item.paymentID, //Variables
  //       item.customerName,
  //       item.email,
  //       item.contactNumber,
  //       item.paymentDate,
  //       item.totalAmount,
  //       item.paymentMethod
  //     ]),
  //   });
  //   doc.save("Payment Report.pdf"); //name which the PDF should be saved
  // };

  // const actions = [
  //   {
  //     icon: () => (
  //       <button onClick={downloadPdf} className="export" style={{ width: '120px', height: '30px'}}>
  //         Download PDF
  //       </button>
  //     ),
  //     tooltip: "Export to Pdf",
  //     isFreeAction: true,
  //   },
  // ];

  return (
    <div className="datatablePY">
      <div className="datatableTitle">
        <h6>Search by date:</h6>
        <input
          type="date"
          className="search"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e)}
        />
        <Link to="/payment/checkout" className="link">
          Checkout
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={paymentUserColoumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        getRowId={(row) => row._id}
        components={
          {
            // Toolbar: () => (
            //   <div>
            //     {actions.map((action, index) => (
            //       <action.icon key={index} onClick={action.onClick} />
            //     ))}
            //   </div>
            // ),
          }
        }
      />
    </div>
  );
};

export default PaymentDatatable;
