// lib/server.ts
import * as fs from "fs";
import * as https from "https";
import app from "./app";

const PORT = 3000;

const httpsOptions = {
    key: fs.readFileSync("./config/key.pem"),
    cert: fs.readFileSync("./config/cert.pem"),
};
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
