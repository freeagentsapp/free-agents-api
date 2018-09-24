// /lib/routes/crmRoutes.ts
import {Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/crmController";
import { UserController } from "../controllers/usersController";
const envkey = process.env.KEY;

export class Routes{

    public contactController: ContactController = new ContactController();
    public usersController: UserController = new UserController();

    public routes(app): void {

        function loggingTime(req, res, next){
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if(req.query.key !== envkey){
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }

        // Create a new contact
        //GET
        app.route('/contact')
        .get((req: Request, res: Response, next: NextFunction) => {
            loggingTime(req, res, next);
        }, this.contactController.getContacts)

        //POST
        .post((req: Request, res: Response, next: NextFunction) => {
            loggingTime(req, res, next);
        }, this.contactController.addNewContact)


        // get a specific contact
        app.route('/contact/:contactId')
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)

        //USERS
        app.route('/user')
        .get((req: Request, res: Response, next: NextFunction) => {
            loggingTime(req, res, next);
        }, this.usersController.getUsers)
        .post((req: Request, res: Response, next: NextFunction) => {
            loggingTime(req, res, next);
        }, this.usersController.addNewUser)

        //State
        app.route('/user/state/:State')
        .get((req: Request, res: Response, next: NextFunction) => {
            loggingTime(req, res, next);
        }, this.usersController.getUsersFromState)

        //zip
        app.route('/user/zip/:Zip')
        .get((req: Request, res: Response, next: NextFunction) => {
            loggingTime(req, res, next);
        }, this.usersController.getUsersFromZip)
    }
}