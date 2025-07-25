"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiOk = apiOk;
exports.apiError = apiError;
function apiOk(res, data) {
    return res.status(200).json({
        success: true,
        status: 200,
        data: data,
    });
}
function apiError(res, message, code) {
    return res.status(code).json({
        success: false,
        status: code,
        error: {
            message: message,
        },
    });
}
