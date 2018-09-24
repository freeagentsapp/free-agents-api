"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/server.ts
const fs = require("fs");
const https = require("https");
const app_1 = require("./app");
const PORT = 3000;
const httpsOptions = {
    key: fs.readFileSync("./config/key.pem"),
    cert: fs.readFileSync("./config/cert.pem"),
};
https.createServer(httpsOptions, app_1.default).listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
//# sourceMappingURL=server.js.map