"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMaterials = void 0;
const material_model_1 = require("../models/material.model");
const getAllMaterials = async () => {
    const materials = material_model_1.Material.find();
    console.log(materials);
    return materials;
};
exports.getAllMaterials = getAllMaterials;
const createMaterial = async (input) => {
    return await material_model_1.Material.create(input);
};
exports.default = createMaterial;
