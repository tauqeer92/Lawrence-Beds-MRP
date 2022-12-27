"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const materials_route_1 = __importDefault(require("./routes/materials.route"));
const mattresses_route_1 = __importDefault(require("./routes/mattresses.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
(0, materials_route_1.default)(app);
(0, mattresses_route_1.default)(app);
mongoose_1.default.connect(process.env.MONGO_URI ?? '')
    .then(() => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
})
    .catch((error) => console.log(error.message));
