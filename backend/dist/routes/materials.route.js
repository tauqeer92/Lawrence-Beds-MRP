"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const materials_controller_1 = __importDefault(require("../controllers/materials.controller"));
const materialRoutes = (app) => {
    app.get("/material", materials_controller_1.default.Index);
    app.post('/creatematerial', materials_controller_1.default.Create);
};
exports.default = materialRoutes;
