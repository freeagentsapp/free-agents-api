"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const usersController_1 = require("../controllers/usersController");
const envkey = process.env.KEY;
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.usersController = new usersController_1.UserController();
    }
    routes(app) {
        function loggingTime(req, res, next) {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== envkey) {
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }
        // Create a new contact
        //GET
        app.route('/contact')
            .get((req, res, next) => {
            loggingTime(req, res, next);
        }, this.contactController.getContacts)
            //POST
            .post((req, res, next) => {
            loggingTime(req, res, next);
        }, this.contactController.addNewContact);
        // get a specific contact
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
        //USERS
        app.route('/user')
            .get((req, res, next) => {
            loggingTime(req, res, next);
        }, this.usersController.getUsers)
            .post((req, res, next) => {
            loggingTime(req, res, next);
        }, this.usersController.addNewUser);
        //State
        app.route('/user/state/:State')
            .get((req, res, next) => {
            loggingTime(req, res, next);
        }, this.usersController.getUsersFromState);
        //zip
        app.route('/user/zip/:Zip')
            .get((req, res, next) => {
            loggingTime(req, res, next);
        }, this.usersController.getUsersFromZip);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map