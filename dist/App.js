"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Main_1 = require("./Main");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        const main = new Main_1.default();
        this.express.use("/main", main.Routes);
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map