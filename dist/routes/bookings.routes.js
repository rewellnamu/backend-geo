"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/bookings.routes.ts
const express_1 = require("express");
const bookings_1 = require("../data/bookings");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json(bookings_1.bookings);
});
exports.default = router;
