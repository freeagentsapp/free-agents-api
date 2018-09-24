"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
exports.UsersSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Email address is required'
    },
    phone: {
        type: String,
        required: 'Phone number is required'
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: 'Gender is required'
    },
    city: {
        type: String,
        required: 'City is required'
    },
    state: {
        type: String,
        uppercase: true,
        enum: statesArray,
        required: 'State is required'
    },
    zip: {
        type: String,
        required: 'Zip is required'
    },
    heard: {
        type: String,
        enum: ["Yes", "No", "Maybe"],
        required: 'Please let us know how you heard about us'
    },
    coords: {
        lat: {
            type: String,
            default: "0"
        },
        lng: {
            type: String,
            default: "0"
        }
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=usersModel.js.map