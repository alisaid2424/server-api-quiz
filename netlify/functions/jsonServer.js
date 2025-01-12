const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

exports.handler = async function (event, context) {
  return new Promise((resolve, reject) => {
    const server = jsonServer.create();
    const router = jsonServer.router(path.join(__dirname, "../../db.json"));
    const middlewares = jsonServer.defaults();

    server.use(cors());
    server.use(middlewares);
    server.use(router);

    server.listen(5000, () => {
      console.log("JSON Server is running on port 5000");
      resolve({
        statusCode: 200,
        body: "JSON Server is running",
      });
    });
  });
};
