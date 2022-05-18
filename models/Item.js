import mongoose, { Schema } from "mongoose";

export default Item = mongoose.model(
  "Item",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    itemType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ItemType",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    condition: {
      type: Boolean,
      required: true,
    },
  })
);
