"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const verifyFirebaseToken_1 = require("../middleware/verifyFirebaseToken");
const router = express_1.default.Router();
// Public
router.post("/register", userController_1.registerUser);
// Protected (requires valid Firebase token)
router.post("/sync", verifyFirebaseToken_1.verifyFirebaseToken, userController_1.upsertUser);
router.get("/me", verifyFirebaseToken_1.verifyFirebaseToken, userController_1.getMe);
exports.default = router;
