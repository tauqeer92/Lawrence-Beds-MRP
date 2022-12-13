"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterial = void 0;
const material_model_1 = require("../models/material.model");
const getMaterial = async () => {
    return material_model_1.Material.find();
};
exports.getMaterial = getMaterial;
const createMaterial = async (input) => {
    return await material_model_1.Material.create(input);
};
exports.default = createMaterial;
