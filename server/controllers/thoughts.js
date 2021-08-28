import mongoose from "mongoose";

import ThoughtModel from "../models/thought.js";

//TODO:
//1.SORT THOUGHTS BY DATE
//2.SEND ONLY JS OBJECTS
//3.USE findOne() and save()
//4.USE OFFSET TO SEND DATA IN PACKETS TO IMPLEMENT INFINITE SCROLLING LATER ON

export const getThoughts = async (req, res) => {
  try {
    var thoughts = await ThoughtModel.find().sort("-createdAt");
    let updatedThoughts = thoughts.map((thought) =>
      setLikedStatus(thought, req.userId)
    );

    res.status(200).json(updatedThoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createThought = async (req, res) => {
  const thought = req.body;
  const newThought = new ThoughtModel({
    ...thought,
    author: { ...thought.author, _id: req.userId },
  });

  try {
    await newThought.save();

    res.status(201).json(newThought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateThought = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const thought = await ThoughtModel.findById(id);

    if (thought.author._id !== req.userId)
      return res.status(401).json({ message: "Unauthorized" });

    const updatedThought = await ThoughtModel.findByIdAndUpdate(
      id,
      { $set: { body: req.body.body, title: req.body.title } },
      { new: true }
    );

    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likeThought = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    var thought = await ThoughtModel.findOneAndUpdate(
      { _id: id, likedByUsersList: { $ne: req.userId } },
      { $push: { likedByUsersList: req.userId } },
      { new: true }
    );

    if (thought) {
      thought = setLikedStatus(thought, req.userId);

      res.status(200).json(thought);
    } else res.status(500).json({ message: "Already Liked by User" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const setLikedStatus = (thought, userId) => {
  thought = thought.toObject();
  thought = {
    ...thought,
    likedByUser: thought.likedByUsersList.includes(userId),
  };

  return thought;
};

export const deleteThought = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const thought = await ThoughtModel.findById(id);

    if (thought.author._id !== req.userId)
      return res.status(401).json({ message: "Unauthorized" });

    await ThoughtModel.findByIdAndDelete(id);

    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
