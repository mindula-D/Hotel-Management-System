import Job from "../models/JobModel.js";
export const createJob = async (req, res, next) => {
  const newJob = new Job(req.body);

  const emptyFields = [];
  if (!req.body.jobTitle) {
    emptyFields.push("jobTitle");
  }
  if (!req.body.employeeId) {
    emptyFields.push("employeeId");
  }
  if (!req.body.location) {
    emptyFields.push("location");
  }
  if (!req.body.date) {
    emptyFields.push("date");
  }
  if (!req.body.workingShift) {
    emptyFields.push("workingShift");
  }
  if (!req.body.jobDesc) {
    emptyFields.push("jobDesc");
  }
  if (emptyFields.length > 0) {
    return res
      .status(200)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const savedJob = await newJob.save();
    res.status(200).json(savedJob);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json("Job deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find(req.params.id);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json(error);
  }
};
