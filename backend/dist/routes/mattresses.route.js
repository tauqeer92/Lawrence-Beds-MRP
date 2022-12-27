"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mattresses_controller_1 = __importDefault(require("../controllers/mattresses.controller"));
const mattressRoutes = (app) => {
    app.get("/mattress", mattresses_controller_1.default.Index);
    app.post("/createmattress", mattresses_controller_1.default.Create);
};
exports.default = mattressRoutes;
