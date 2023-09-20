"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(3000, () => {
    console.log("3000. port dinleniyor");
});
app.get('/', (req, res) => {
    res.send('<div><h1>Merhaba ben selman</h1></div>');
});
