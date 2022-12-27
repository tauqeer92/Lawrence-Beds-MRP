"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMattress = exports.getAllMattresses = void 0;
const mattress_model_1 = require("../models/mattress.model");
const getAllMattresses = async () => {
    return mattress_model_1.Mattress.find();
};
exports.getAllMattresses = getAllMattresses;
const createMattress = async (input) => {
    return await mattress_model_1.Mattress.create(input);
};
exports.createMattress = createMattress;
