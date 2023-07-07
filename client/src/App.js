import AssignJob from "./pages/Housekeeping/assignJob/AssignJob";
import UpdateJob from "./pages/Housekeeping/updateJob/UpdateJob";
import ViewDutyRoster from "./pages/Housekeeping/viewDutyRoster/ViewDutyRoster";
import GetFeedback from "./pages/Housekeeping/getFeedback/GetFeedback";
import ViewFeedback from "./pages/Housekeeping/viewFeedback/ViewFeedback";
import Home from "./pages/home/Home";

import AddCount from "./pages/Kitchen/addCount/AddCount";
import AddFood from "./pages/Kitchen/addFood/AddFood";
import FoodCountDetails from "./pages/Kitchen/foodCountDetails/FoodCountDetails";
import FoodStockDetails from "./pages/Kitchen/foodStockDetails/FoodStockDetails";
import Update from "./pages/Kitchen/update/UpdateFood";

import AddEvent from "./pages/Event/addEvent/AddEvent";
import FeeBaseActivities from "./pages/Event/feeBaseActivities/FeeBaseActivities";
import GenarateReport from "./pages/Event/genarateReport/GenarateReport";
import RecordTable from "./pages/Event/recordTable/RecordTable";
import ClientPage from "./pages/Event/clientPage/ClientPage";
import UpdatePage from "./pages/Event/updatePage/UpdatePage";

import BookingRecord from "./pages/Booking/booking_record/booking_record";
import AddBooking from "./pages/Booking/add_booking/add_booking";
import GenReport from "./pages/Booking/generate_booking/generate_booking";
import BookingSearch from "./pages/Booking/booking_search/booking_search";
import UpdateBooking from "./pages/Booking/update_booking/update_booking";

import AddEmployees from "./pages/Employee/addEmployees/AddEmployees";
import ViewEmployees from "./pages/Employee/viewEmployees/ViewEmployees";
import Salary from "./pages/Employee/salary/Salary";
import SalaryReport from "./pages/Employee/salaryReport/SalaryReport";
import UpdateEmployees from "./pages/Employee/updateForm/updateForm";

import Checkout from "./pages/Payment/checkout/Checkout";
import PaymentRecords from "./pages/Payment/paymentRecords/PaymentRecords";
import Refund from "./pages/Payment/refund/Refund";
import PaymentReport from "./pages/Payment/paymentReport/PaymentReport";
import PaymentUpdate from "./pages/Payment/paymentUpdate/PaymentUpdate";

import AddDriver from "./pages/Transport/addDriver/addDriver";
import StaffTransport from "./pages/Transport/staffTransport/staffTransport";
import GuestTransport from "./pages/Transport/guestTransport/guestTransport";
import DriverProfiles from "./pages/Transport/driverProfiles/driverProfiles";
import GenerateReport from "./pages/Transport/generateReport/generateReport";
import DriverProfilesStaff from "./pages/Transport/driverProfilesStaff/driverProfilesStaff";
import TripUpdatePage from "./pages/Transport/TripUpdatePage/TripUpdatePage";
import DriverUpdatePage from "./pages/Transport/DriverUpdatePage/DriverUpdatePage";
import StaffUpdatePage from "./pages/Transport/StaffUpdatePage/StaffUpdatePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/housekeeping/assignJob">
            <Route index element={<AssignJob />} />
          </Route>
          <Route path="/housekeeping/viewDutyRoster">
            <Route index element={<ViewDutyRoster />} />
          </Route>
          <Route path="/housekeeping/getFeedback">
            <Route index element={<GetFeedback />} />
          </Route>
          <Route path="/housekeeping/viewFeedback">
            <Route index element={<ViewFeedback />} />
          </Route>
          <Route path="/housekeeping/updateJob/:id">
            <Route index element={<UpdateJob />} />
          </Route>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          ////////////////////////////////////////////////////////////////////////////kitchen
          <Route path="/kitchen/addFood">
            <Route index element={<AddFood />} />
          </Route>
          <Route path="/kitchen/addCount">
            <Route index element={<AddCount />} />
          </Route>
          <Route path="/kitchen/foodCountDetails">
            <Route index element={<FoodCountDetails />} />
          </Route>
          <Route path="/kitchen/foodStockDetails">
            <Route index element={<FoodStockDetails />} />
          </Route>
          //
          <Route path="/kitchen/update/:id">
            <Route index element={<Update />} />
          </Route>
          ////////////////////////////////////////////////////////////////////////////event
          <Route path="/event/feeBaseActivities">
            <Route index element={<FeeBaseActivities />} />
          </Route>
          <Route path="/event/addEvent">
            <Route index element={<AddEvent />} />
          </Route>
          <Route path="/event/genarateReport">
            <Route index element={<GenarateReport />} />
          </Route>
          <Route path="/event/recordTable">
            <Route index element={<RecordTable />} />
          </Route>
          <Route path="/event/feeBaseActivities/clientPage">
            <Route index element={<ClientPage />} />
          </Route>
          <Route path="/event/update/:id">
            <Route index element={<UpdatePage />} />
          </Route>
          ////////////////////////////////////////////////////////////////////////////booking
          <Route path="/booking/AddBooking">
            <Route index element={<AddBooking />} />
          </Route>
          <Route path="/booking/BookingRecord">
            <Route index element={<BookingRecord />} />
          </Route>
          <Route path="/booking/GenReport">
            <Route index element={<GenReport />} />
          </Route>
          <Route path="/booking/BookingSearch">
            <Route index element={<BookingSearch />} />
          </Route>
          <Route path="/booking/updateBookingg/:id">
            <Route index element={<UpdateBooking />} />
          </Route>
          ////////////////////////////////////////////////////////////////////////////employee
          <Route path="/employees/addEmployees">
            <Route index element={<AddEmployees />} />
          </Route>
          <Route path="/employees/viewEmployees">
            <Route index element={<ViewEmployees />} />
          </Route>
          <Route path="/employees/salary">
            <Route index element={<Salary />} />
          </Route>
          <Route path="/employees/salaryReport">
            <Route index element={<SalaryReport />} />
          </Route>
          <Route path="/employees/updateEmployees/:id">
            <Route index element={<UpdateEmployees />} />
          </Route>
          ////////////////////////////////////////////////////////////////////////////payment
          <Route path="/payment/checkout">
            <Route index element={<Checkout />} />
          </Route>
          <Route path="/payment/paymentRecords">
            <Route index element={<PaymentRecords />} />
          </Route>
          <Route path="/payment/refund">
            <Route index element={<Refund />} />
          </Route>
          <Route path="/payment/paymentReport">
            <Route index element={<PaymentReport />} />
          </Route>
          <Route path="/payment/paymentUpdate/:id">
            <Route index element={<PaymentUpdate />} />
          </Route>
          ////////////////////////////////////////////////////////////////////////////transport
          <Route path="/transportation/addDriver">
            <Route index element={<AddDriver />} />
          </Route>
          <Route path="/transportation/staffTransport">
            <Route index element={<StaffTransport />} />
          </Route>
          <Route path="/transportation/guestTransport">
            <Route index element={<GuestTransport />} />
          </Route>
          <Route path="/transportation/driverProfiles">
            <Route index element={<DriverProfiles />} />
          </Route>
          <Route path="/transportation/driverProfilesStaff">
            <Route index element={<DriverProfilesStaff />} />
          </Route>
          <Route path="/transportation/generateReport">
            <Route index element={<GenerateReport />} />
          </Route>
          <Route path="/transportation/TripUpdatePage/:id">
            <Route index element={<TripUpdatePage />} />
          </Route>
          <Route path="/transportation/DriverUpdatePage/:id">
            <Route index element={<DriverUpdatePage />} />
          </Route>
          <Route path="/transportation/StaffUpdatePage/:id">
            <Route index element={<StaffUpdatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
