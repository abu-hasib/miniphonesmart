import mongoose from "mongoose";

const schema = mongoose.Schema;

var sellRequestSchema = new schema({
  name: String,
  size: String,
  condition: String,
  price: Number,
  requestType: {
    type: String,
    enum: ["Buy", "Sell"],
  },
});

export default mongoose.model("SellRequest", sellRequestSchema);
