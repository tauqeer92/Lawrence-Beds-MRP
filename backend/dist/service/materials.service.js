"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterial = void 0;
const material_model_1 = require("../models/material.model");
const getMaterial = async () => {
    await material_model_1.Material.find();
};
exports.getMaterial = getMaterial;
const createMaterial = async (input) => {
    try {
        return await material_model_1.Material.create(input); // This where it should be checked and validated
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.default = createMaterial;
