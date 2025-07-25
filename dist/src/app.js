"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_file_routing_1 = __importDefault(require("express-file-routing"));
const mongo_db_1 = require("../generated/mongo_db");
const main = async () => {
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    const router = express_1.default.Router();
    const prisma = new mongo_db_1.PrismaClient();
    await (0, express_file_routing_1.default)(router, {
        directory: path_1.default.join(__dirname, 'routes'),
    });
    await prisma.$connect();
    console.log('berhasil koneksi ke MongoDB');
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, morgan_1.default)('dev'));
    app.use('/api', router);
    app.listen(4999, () => {
        console.log('Server started on port 4999');
    });
};
main();
