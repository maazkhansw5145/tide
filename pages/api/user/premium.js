import MongodbConnect from "../../../utils/MongodbConnect";
import UserSchema from "../../../models/UserSchema";

export default function premium(req, res) {
  if (req.method === "POST") {
    MongodbConnect();
    UserSchema.findOneAndUpdate(
      { emailId: req.body.emailId },
      {
        name: req.body.name,
        premium_session_id: req.body.premium_session_id,
        premium: true,
        status: req.body.status,
        premium_package_type: req.body.premium_package_type,
        premium_bought_at: req.body.premium_bought_at,
        premium_expires_at: req.body.premium_expires_at,
      }
    ).then((user) => {
      return res.status(200).json(user);
    });
  } else {
    return res.status(404).json({ msg: "Wrong request" });
  }
}
