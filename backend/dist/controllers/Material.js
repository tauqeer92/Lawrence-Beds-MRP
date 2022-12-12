"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const material_1 = __importDefault(require("../models/material"));
const createAuthor = (req, res, next) => {
    const { bed } = req.body;
    const author = new material_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        bed,
    });
    return author
        .save()
        .then((author) => res.status(201).json({ author }))
        .catch((error) => res.status(500).json({ error }));
};
