/////////////////////////////////////////////////////////////////////////housekeeping
export const userColumns = [
  { field: "jobTitle", headerName: "Job Title", width: 180 },

  {
    field: "employeeId",
    headerName: "Employee ID",
    width: 140,
  },

  {
    field: "location",
    headerName: "Location",
    width: 140,
  },

  {
    field: "date",
    headerName: "Date",
    width: 140,
  },

  {
    field: "workingShift",
    headerName: "Working Shift",
    width: 140,
  },

  {
    field: "jobDesc",
    headerName: "Remarks",
    width: 260,
  },
];

export const userColumnsFeedback = [
  { field: "customerName", headerName: "Customer Name", width: 250 },

  {
    field: "customerEmail",
    headerName: "Email",
    width: 250,
  },

  {
    field: "roomId",
    headerName: "Room ID",
    width: 150,
  },

  {
    field: "feedbackBody",
    headerName: "Feedback",
    width: 350,
  },
];

/////////////////////////////////////////////////////////////////////////////kitchen
export const countColoumns = [
  {
    field: "foodNameCount",
    headerName: "Name",
    width: 160,
  },

  {
    field: "typeCount",
    headerName: "Type",
    width: 160,
  },

  {
    field: "date",
    headerName: "Date",
    width: 160,
  },

  {
    field: "availability",
    headerName: "Quantity",
    width: 120,
  },
];

export const userColoumns = [
  { field: "foodName", headerName: "Food Name", width: 200 },
  {
    field: "type",
    headerName: "Type",
    width: 200,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "unitPrice",
    headerName: "UnitPrice",
    width: 210,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
];

/////////////////////////////////////////////////////////////////////////////event
export const userColoumnsEV = [
  {
    field: "customer_name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone_number",
    headerName: "Contact Number",
    width: 100,
  },
  {
    field: "function_type",
    headerName: "Event Type",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
  },

  { field: "timeSlot", headerName: "Time Slot", width: 100 },

  {
    field: "hall_type",
    headerName: "Hall Type",
    width: 100,
  },
  {
    field: "total_count",
    headerName: "Total count",
    width: 100,
  },
  {
    field: "totalSalary",
    headerName: "Total Amount",
    width: 100,
  },
];

export const calColoumns = [
  {
    field: "customer_name",
    headerName: "Name",
    width: 150,
  },

  {
    field: "date",
    headerName: "Date",
    width: 125,
  },

  { field: "timeSlot", headerName: "Time Slot", width: 100 },

  {
    field: "fee_based_Activities",
    headerName: "Fee_Based",
    width: 100,
  },
  {
    field: "function_type",
    headerName: "Function Type",
    width: 150,
  },

  {
    field: "plate_type",
    headerName: "Plate Type",
    width: 100,
  },

  {
    field: "total_count",
    headerName: "Total count",
    width: 100,
  },

  {
    field: "additional_charges",
    headerName: "A/Charges",
    width: 100,
  },

  {
    field: "totalSalary",
    headerName: "Total Amount",
    width: 100,
  },
];

export const feeBaseColoumns = [
  {
    field: "customer_name",
    headerName: "Name",
    width: 150,
  },

  {
    field: "date",
    headerName: "Date",
    width: 150,
  },

  { field: "timeSlot", headerName: "Time Slot", width: 100 },
  {
    field: "total_count",
    headerName: "Total count",
    width: 100,
  },

  {
    field: "pool",
    headerName: "Pool",
    width: 125,
  },
  {
    field: "boatRide",
    headerName: "Boat Ride",
    width: 125,
  },
  {
    field: "photoShoot",
    headerName: "Photo Shoot",
    width: 125,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    width: 100,
  },
];

/////////////////////////////////////////////////////////////////////////////booking
export const userColoumnsBK = [
  {
    field: "user",
    headerName: "Book",
    width: 60,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "bookingid",
    headerName: "ID",
    width: 90,
  },
  {
    field: "nic",
    headerName: "NIC",
    width: 120,
  },
  {
    field: "name",
    headerName: "Name",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone No",
    width: 150,
  },
  {
    field: "address1",
    headerName: "Address1",
    width: 150,
  },
  {
    field: "address2",
    headerName: "Address2",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "state",
    headerName: "State",
    width: 100,
  },
  {
    field: "zip",
    headerName: "ZIP",
    width: 70,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "checkin",
    headerName: "Checkin Date",
    width: 180,
  },
  {
    field: "checkout",
    headerName: "Checkout Date",
    width: 180,
  },
  {
    field: "roomtype",
    headerName: "Room Type",
    width: 100,
  },
  {
    field: "roomCount",
    headerName: "Room Count",
    width: 100,
  },
  {
    field: "totRoom",
    headerName: "Total Value",
    width: 100,
  },
  {
    field: "noadults",
    headerName: "No Adults",
    width: 100,
  },
  {
    field: "nochildren",
    headerName: "No Children",
    width: 100,
  },
];

/////////////////////////////////////////////////////////////////////////////employee
export const EmployeeColoumns = [
  //{ field: 'id', headerName: 'ID', width: 70 },

  {
    field: "employeeID",
    headerName: "Employee ID",
    width: 110,
    unique: true,
  },
  {
    field: "employeeName",
    headerName: "Employee Name",
    width: 140,
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    width: 120,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 80,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 120,
  },
  {
    field: "address",
    headerName: "Address",
    width: 215,
  },
  {
    field: "employeeTitle",
    headerName: "Employee Title",
    width: 150,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 80,
  },
];

export const EmployeeSalaryColoumns = [
  //{ field: 'id', headerName: 'ID', width: 70 },

  {
    field: "employeeid",
    headerName: "Employee ID",
    width: 140,
    unique: true,
  },
  {
    field: "basicSalary",
    headerName: "Basic Salary",
    width: 150,
  },
  {
    field: "allowance",
    headerName: "Allowance",
    width: 150,
  },
  {
    field: "overtime",
    headerName: "OverTime",
    width: 135,
  },
  {
    field: "attendance",
    headerName: "Attendence",
    width: 140,
  },
  {
    field: "totalSalary",
    headerName: "Total Salary",
    width: 160,
  },
];

/////////////////////////////////////////////////////////////////////////////employee
export const paymentUserColoumns = [
  {
    field: "paymentID",
    headerName: "Payment ID",
    width: 100,
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 190,
  },
  {
    field: "email",
    headerName: "Email",
    width: 190,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    width: 160,
  },
  {
    field: "paymentDate",
    headerName: "Date",
    width: 120,
  },
  {
    field: "transactionType1",
    headerName: "Tansaction Type 01",
    width: 170,
  },
  {
    field: "amount1",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "transactionType2",
    headerName: "Tansaction Type 02",
    width: 170,
  },
  {
    field: "amount2",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "transactionType3",
    headerName: "Tansaction Type 03",
    width: 220,
  },
  {
    field: "amount3",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    width: 120,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 140,
  },
];

/////////////////////////////////////////////////////////////////////////////transport
export const Transport_userColoumns = [
  {
    field: "DriverID",
    headerName: "Driver ID",
    width: 120,
  },
  {
    field: "DriverFirstName",
    headerName: "First Name",
    width: 160,
  },
  {
    field: "DriverLastName",
    headerName: "Last Name",
    width: 160,
  },
  {
    field: "VehicleManufacture",
    headerName: "Manufacturer",
    width: 160,
  },
  {
    field: "VehicleModel",
    headerName: "Model",
    width: 160,
  },
  {
    field: "ContactNumber",
    headerName: "Contact Number",
    width: 160,
  },
];

export const TransportStaff_userColoumns = [
  {
    field: "StaffDriverID",
    headerName: "Driver ID",
    width: 120,
  },
  {
    field: "StaffDriverFirstName",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "StaffDriverLastName",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "Vehicle",
    headerName: "Vehicle",
    width: 150,
  },
  {
    field: "StartingPoint",
    headerName: "Pick-Up Point",
    width: 200,
  },
  {
    field: "StartingTime",
    headerName: "Pick-Up Time",
    width: 150,
  },
];

export const TransportTrip_userColoumns = [
  {
    field: "TripID",
    headerName: "Trip ID",
    width: 90,
  },
  {
    field: "RequesterName",
    headerName: "Requested By",
    width: 180,
  },
  {
    field: "RequesterContactNumber",
    headerName: "Contact No",
    width: 130,
  },
  {
    field: "TripDate",
    headerName: "Scheduled Date",
    width: 150,
  },
  {
    field: "PickUpLocation",
    headerName: "Pick-Up",
    width: 150,
  },
  {
    field: "PickUpTime",
    headerName: "Pick-Up Time",
    width: 110,
  },
  {
    field: "DropOffLocation",
    headerName: "Drop-Off",
    width: 140,
  },
];
