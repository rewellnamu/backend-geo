"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parks_1 = require("../data/parks");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.json(parks_1.parks);
});
exports.default = router;
