"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterialHandler = void 0;
const materials_service_1 = __importDefault(require("../service/materials.service"));
const materials_service_2 = require("../service/materials.service");
const getMaterialHandler = async (req, res) => {
    const materials = await (0, materials_service_2.getMaterial)();
    res.json({ materials });
};
exports.getMaterialHandler = getMaterialHandler;
const createMaterialHandler = async (req, res) => {
    const material_data = { name: req.body.name, price: req.body.price, description: req.body.description };
    const material = await (0, materials_service_1.default)(material_data);
    res.json({ material_data });
};
exports.default = createMaterialHandler;
