"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterialHandler = void 0;
const material_model_1 = require("../models/material.model");
const materials_service_1 = __importDefault(require("../service/materials.service"));
const getMaterialHandler = async (req, res, next) => {
    try {
        material_model_1.Material.find((err, price) => {
            res.json({ price: price });
        });
    }
    catch (e) {
    }
};
exports.getMaterialHandler = getMaterialHandler;
const createMaterialHandler = async (req, res, next) => {
    try {
        const material = await (0, materials_service_1.default)(req.body); // don't we need to specify fields? Is req.body from the middleware schema?
    }
    catch (e) {
    }
};
exports.default = createMaterialHandler;
