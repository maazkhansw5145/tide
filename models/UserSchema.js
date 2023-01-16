import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    default: "recruiter",
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  picture_url: {
    type: String,
  },
  userId: {
    type: String,
  },
  premium_session_id: {
    type: String,
  },
  status: {
    type: String,
    default: "New user",
  },
  premium: {
    type: Boolean,
    default: false,
  },
  premium_package_type: {
    type: String,
  },
  premium_bought_at: {
    type: Date,
  },
  premium_expires_at: {
    type: Date,
  },
});

const buyerModel = models.users || model("users", userSchema);

export default buyerModel;
