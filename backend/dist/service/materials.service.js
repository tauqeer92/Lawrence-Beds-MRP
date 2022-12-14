"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMaterials = void 0;
const material_model_1 = require("../models/material.model");
const getAllMaterials = async () => {
    return material_model_1.Material.find();
};
exports.getAllMaterials = getAllMaterials;
const createMaterial = async (input) => {
    return await material_model_1.Material.create(input);
};
exports.default = createMaterial;
