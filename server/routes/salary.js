import express from "express";
const router = express.Router();
import Salary from "../models/Salary.js";

router.route("/added").post((req,res)=>{
     //add salary
    const employeeid = req.body.employeeid;
    const basicSalary = Number(req.body.basicSalary);
    const allowance = Number(req.body.allowance);
    const overtime= Number(req.body.overtime);
    const attendance = Number(req.body.attendance);
    const totalSalary = Number( allowance+basicSalary+ (overtime * 0.1 * basicSalary) - (basicSalary / 30 * (30 - attendance)));
    //basicSalary + allowance 
    //+ (overtime * 0.1 * basicSalary) - (basicSalary / 30 * (30 - attendance));
   // const totalSalary = basicSalary + allowance 
   // + (overtime * 1.5 * basicSalary) - (basicSalary / 30 * (30 - attendance));
    

    const newSalary = new Salary({

        employeeid,
        basicSalary,
        allowance,
        overtime,
        attendance,
        totalSalary,
       

    })

    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })


})
//fetch salary

router.route("/").get((req,res)=>{

    Salary.find().then((salary)=>{
        res.json(salary)
    }).catch((err)=>{
        console.log(err)
    })

})


//update salary

router.route("/updated/:id").put(async(req,res)=>{
    let userId = req.params.id;
    //const {employeeid,basicSalary,allowance,overtime,attendance} = req.body;
    //const totalSalary = basicSalary + allowance + (overtime * 0.1 * basicSalary) - (basicSalary / 30 * (30 - attendance));

    const updateSalary = {
        employeeid,
        basicSalary,
        allowance,
        overtime,
        attendance,
        totalSalary,
    }

    const update = await Salary.findByIdAndUpdate(userId,updateSalary)
    .then(()=> {
        res.status(200).send({status:"User updated"})

    }).catch((err)=>{ 
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});

    })

})


//fetch single to db
router.route("/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Salary.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});

    })

})

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
   const user = await Salary.findById(userId)
    .then((salary)=>{
        res.status(200).send({status:"User fetched",salary})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error: err.message});
    })
})


export default router;