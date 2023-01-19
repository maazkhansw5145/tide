import MongodbConnect from "../../../utils/MongodbConnect";
import UserSchema from "../../../models/UserSchema";

export default function checkUser(req, res) {
  if (req.method === "GET") {
    console.log(req.body);
    MongodbConnect();
    UserSchema.findOne({ emailId: req.body.data.emailId }).then((response) => {
      if (!response) {
        return res.status(404).json({ msg: "No user found" });
      } else {
        return res.status(200).json(response);
      }
    });
  } else {
    return res.status(404).json({ msg: "Wrong request" });
  }
}
