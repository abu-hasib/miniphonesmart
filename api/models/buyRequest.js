import mongoose from "mongoose";

const schema = mongoose.Schema;

var buyRequest = new schema({
  name: String,
  size: String,
  condition: String,
  price: Number,
  image: Buffer,
  requestType: {
    type: String,
    enum: ["Buy", "Sell"],
  },
});

export default mongoose.model("BuyRequest", buyRequest);
