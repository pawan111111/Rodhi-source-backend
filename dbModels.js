import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  img: String,
  firsttitle: String,
  paragraph: String,
  secondtitle: String,
  li1: String,
  li2: String,
  li3: String,
  li4: String,
  li5: String,
  li6: String,
  li7: String,
  li8: String,
  li9: String,
});

export default mongoose.model("tiktok", tiktokSchema);


