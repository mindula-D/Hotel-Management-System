//import Menu from "../../components/menu_employees/Menu_employees";
import { useState } from "react"
import "./calculateForm.scss";

const CalculateForm = () => {
//const [_id, set_Id] = useState("");
const [price_plate_type, set_Price_plate_type] = useState("");
const [num_people,set_Num_people] = useState("");
const [cal_total ,set_Cal_total] = useState("");



const calculateSalary = () => {
      cal_total = price_plate_type * num_people ;
      
       set_Cal_total(cal_total);
};

return(
<form>
   <label> Enter Plate Price</label>
   |<input 
    type="text" 
    onChange={(e)=> set_Price_plate_type(e.target.value)}
    value ={price_plate_type}
   />

<label> Enter Total Count</label>
   |<input 
    type="number" 
    onChange={(e)=> set_Num_people(e.target.value)}
    value ={num_people}
   />
   <label>Total Salary</label>
    <input
    type="number"
    onChange={(e) => set_Cal_total(e.target.value)}
    value={cal_total}
    />
      <button type="button" onClick={calculateSalary}>
    Calculate Salary
    </button>




   </form>
)

};

export default CalculateForm;


