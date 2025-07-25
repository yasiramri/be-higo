"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const db1_1 = require("../../utils/db1");
const common_1 = require("../../tools/common");
const get = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const gender = req.query.gender;
        const sortBy = req.query.sortBy || 'Age';
        const order = req.query.order === 'desc' ? 'desc' : 'asc';
        const skip = (page - 1) * limit;
        const data = await db1_1.db1.higo.findMany({
            skip,
            take: limit,
            where: gender ? { gender } : undefined,
            orderBy: {
                [sortBy]: order,
            },
            select: {
                id: true,
                Name: true,
                Age: true,
                gender: true,
                Email: true,
                Number: true,
                Location_Type: true,
                Digital_Interest: true,
            },
        });
        const total = await db1_1.db1.higo.count({
            where: gender ? { gender } : undefined,
        });
        return (0, common_1.apiOk)(res, {
            page,
            limit,
            total,
            data,
        });
    }
    catch (error) {
        console.error('Error GET /api/higo:', error);
        return (0, common_1.apiError)(res, 'Internal Server Error', 500);
    }
};
exports.get = get;
