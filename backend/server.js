import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 2222;
app.use(bodyParser.json());

const user = [
  {
    name: "lhagvaa",
    age: 22,
  },
];
app.get("/users", (request, response) => {
  response.json(user);
});
app.post("/users", (request, response) => {});
app.listen(PORT, () => {
  console.log("server ajillaj baina");
});
