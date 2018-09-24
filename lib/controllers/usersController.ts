//   /lib/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { UsersSchema } from '../models/usersModel';
import { Request, Response } from 'express';

const Users = mongoose.model('Users', UsersSchema);

export class UserController{

public addNewUser (req: Request, res: Response) {                
        let newUser = new Users(req.body);
    
        newUser.save((err, User) => {
            if(err){
                res.send(err);
            }    
            res.json(User);
        });
    }
    public getUsers (req: Request, res: Response) {           
        Users.find({}, (err, User) => {
            if(err){
                res.send(err);
            }
            res.json(User);
        });
    }
    public getUserWithID (req: Request, res: Response) {           
        Users.findById(req.params.UserId, (err, User) => {
            if(err){
                res.send(err);
            }
            res.json(User);
        });
    }
    public updateUser (req: Request, res: Response) {           
        Users.findOneAndUpdate({ _id: req.params.UserId }, req.body, { new: true }, (err, User) => {
            if(err){
                res.send(err);
            }
            res.json(User);
        });
    }
    public deleteUser (req: Request, res: Response) {           
        Users.remove({ _id: req.params.UserId }, (err, User) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted User!'});
        });
    }
    public getUsersFromState (req: Request, res: Response) {           
        Users.find({state: req.params.State}, (err, User) => {
            if(err){
                res.send(err);
            }
            res.json(User);
        });
    }
    public getUsersFromZip (req: Request, res: Response) {           
        Users.find({zip: req.params.Zip}, (err, User) => {
            if(err){
                res.send(err);
            }
            res.json(User);
        });
    }
}
