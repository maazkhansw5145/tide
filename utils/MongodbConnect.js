import mongoose from "mongoose";

const MongodbConnect = async () => {
  if (!mongoose.connections[0].readyState) {
    mongoose
      .connect(
        "mongodb+srv://jcxa95:Justin.Tide.codes2023@cluster0.luzmfzu.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("Database connected"))
      .catch((e) => console.log(e));
  }
};

export default MongodbConnect;
