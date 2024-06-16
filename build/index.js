"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// All other routes should serve the index.html file
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
