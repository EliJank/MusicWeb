import Merch from "../models/merchModel.js";

const getAllMerch = async (req, res) => {
  try {
    const merchItems = await Merch.find();
    res.json(merchItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching merchandise" });
  }
};

const getMerchById = async (req, res) => {
  const { id } = req.params;

  try {
    const merchItem = await Merch.findById(id);
    if (!merchItem) {
      return res.status(404).json({ message: "Merchandise not found" });
    }
    res.json(merchItem);
  } catch (error) {
    res.status(500).json({ message: "Error fetching merchandise" });
  }
};

const createMerch = async (req, res) => {
  const { title, group, description, url, price } = req.body;

  try {
    const newMerch = await Merch.create({
      title,
      group,
      description,
      url,
      price,
    });
    res.status(201).json(newMerch);
  } catch (error) {
    res.status(400).json({ message: "Error creating merchandise" });
  }
};

const updateMerch = async (req, res) => {
  const { id } = req.params;
  const { title, description, url, price } = req.body;

  try {
    const updatedMerch = await Merch.findByIdAndUpdate(
      id,
      { title, group, description, url, price },
      { new: true }
    );
    if (!updatedMerch) {
      return res.status(404).json({ message: "Merchandise not found" });
    }
    res.json(updatedMerch);
  } catch (error) {
    res.status(400).json({ message: "Error updating merchandise" });
  }
};

const deleteMerch = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMerch = await Merch.findByIdAndDelete(id);
    if (!deletedMerch) {
      return res.status(404).json({ message: "Merchandise not found" });
    }
    res.json({ message: "Merchandise deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting merchandise" });
  }
};

export {
  getAllMerch,
  getMerchById,
  createMerch,
  updateMerch,
  deleteMerch,
};
