"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mattresses_service_1 = require("../service/mattresses.service");
const mattresses_service_2 = require("../service/mattresses.service");
const MattressController = {
    Index: async (req, res) => {
        const mattresses = await (0, mattresses_service_1.getAllMattresses)();
        res.json({ mattresses });
    },
    Create: async (req, res) => {
        const mattress_data = { name: req.body.name, size: req.body.size, type: req.body.type,
            cost: req.body.cost, price: req.body.price, description: req.body.description };
        const mattress = await (0, mattresses_service_2.createMattress)(mattress_data);
        res.json({ mattress_data });
    }
};
exports.default = MattressController;
