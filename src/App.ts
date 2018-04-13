import * as express from "express";
import Main from "./Main";

export default class App {
  express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    const main = new Main();
    this.express.use("/main", main.Routes);
  }
}
