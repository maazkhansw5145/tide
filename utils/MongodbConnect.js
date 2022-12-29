import mongoose from "mongoose";

const MongodbConnect = async () => {
  if (!mongoose.connections[0].readyState) {
    mongoose
      .connect("mongodb://localhost:27017/tide", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected"))
      .catch((e) => console.log(e));
  }
};

export default MongodbConnect;
