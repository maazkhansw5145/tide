import MongodbConnect from "../../../utils/MongodbConnect";
import UserSchema from "../../../models/UserSchema";

export default function login(req, res) {
  if (req.method === "POST") {
    console.log(req.body)
    MongodbConnect();
    UserSchema.findOne({ emailId: req.body.data.emailId }).then((response) => {
      if (!response) {
        const newUser = new UserSchema(req.body.data);
        newUser
          .save()
          .then((user) => {
            return res.status(200).json(user);
          })
          .catch((e) => {
            return res.status(400).json(e);
          });
      } else {
        return res.status(200).json(response);
      }
    });
  } else {
    return res.status(404).json({ msg: "Wrong request" });
  }
}
