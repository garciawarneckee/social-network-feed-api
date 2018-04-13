"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 3000;
new App_1.default().express.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listenign on ${port}`);
});
//# sourceMappingURL=index.js.map