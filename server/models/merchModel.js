import mongoose from "mongoose";

const merchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  group: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
});

const Merch = mongoose.model("Merch", merchSchema);

export default Merch;
