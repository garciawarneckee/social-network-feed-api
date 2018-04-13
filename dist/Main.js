"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Main {
    constructor() {
        this.router = express_1.Router();
    }
    greet() {
        console.log('entra');
        return (req, res) => {
            console.log(res);
            res.json({ message: "Hello World!" });
        };
    }
    get Routes() {
        console.log('tatatata');
        this.router.get('/', this.greet());
        return this.router;
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map