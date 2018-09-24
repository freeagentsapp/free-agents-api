"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/controllers/crmController.ts
const mongoose = require("mongoose");
const usersModel_1 = require("../models/usersModel");
const Users = mongoose.model('Users', usersModel_1.UsersSchema);
class UserController {
    addNewUser(req, res) {
        let newUser = new Users(req.body);
        newUser.save((err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    getUsers(req, res) {
        Users.find({}, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    getUserWithID(req, res) {
        Users.findById(req.params.UserId, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    updateUser(req, res) {
        Users.findOneAndUpdate({ _id: req.params.UserId }, req.body, { new: true }, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    deleteUser(req, res) {
        Users.remove({ _id: req.params.UserId }, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted User!' });
        });
    }
    getUsersFromState(req, res) {
        Users.find({ state: req.params.State }, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    getUsersFromZip(req, res) {
        Users.find({ zip: req.params.Zip }, (err, User) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=usersController.js.map