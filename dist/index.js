"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const parks_routes_1 = __importDefault(require("./routes/parks.routes"));
const animals_routes_1 = __importDefault(require("./routes/animals.routes"));
const bookings_routes_1 = __importDefault(require("./routes/bookings.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/parks', parks_routes_1.default);
app.use('/api/animals', animals_routes_1.default);
app.use('/api/bookings', bookings_routes_1.default);
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
