import Feedback from "../models/feedbackModel.js";

export const createFeedback = async (req, res, next) => {
  const newFeedback = new Feedback(req.body);

  try {
    const savedFeedback = await newFeedback.save();
    res.status(200).json(savedFeedback);
  } catch (error) {
    res.status(500).json(error);
  }
};

// export const updateFeedback = async (req, res, next) => {
//   try {
//     const updatedJob = await Job.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedJob);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

export const deleteFeedback = async (req, res, next) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).json("Feedback deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllFeedbacks = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find(req.params.id);
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json(error);
  }
};
