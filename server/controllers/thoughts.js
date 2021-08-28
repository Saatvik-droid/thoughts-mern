import mongoose from "mongoose";

import ThoughtModel from "../models/thought.js";

//TODO:
//4.USE OFFSET TO SEND DATA IN PACKETS TO IMPLEMENT INFINITE SCROLLING LATER ON

export const getThoughts = async (req, res) => {
  try {
    let thoughts = await ThoughtModel.find().sort("-createdAt").lean();
    thoughts = thoughts.map((thought) => setLikedStatus(thought, req.userId));

    res.status(200).json(thoughts);
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

    const updatedThought = await ThoughtModel.findOneAndUpdate(
      { _id: id, "author._id": req.userId },
      { $set: { body: req.body.body, title: req.body.title } },
      { new: true }
    ).lean();

    if (updateThought) res.json(updatedThought);
    else res.status(401).json({ message: "Unauthorized" });
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
    ).lean();

    if (thought) {
      thought = setLikedStatus(thought, req.userId);

      res.status(200).json(thought);
    } else res.status(500).json({ message: "Already Liked by User" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteThought = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const thought = await ThoughtModel.findOneAndDelete({
      _id: id,
      "author._id": req.userId,
    });

    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const setLikedStatus = (thought, userId) => {
  thought = {
    ...thought,
    likedByUser: thought.likedByUsersList.includes(userId),
  };

  return thought;
};
