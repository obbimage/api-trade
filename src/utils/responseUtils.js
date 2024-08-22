const { responseCodes } = require("../config/constans")

function createResponse(httpCode, status, data = {}) {
    return {
        code: httpCode,
        status: status,
        data: data
    }
};

// response success
function createResponseSuccess(data) {
    return createResponse(
        responseCodes.http.OK,
        responseCodes.status.SUCCESS,
        data
    );
};

// response error
function createResponseError(data) {
    return createResponseError(
        responseCodes.http.INTERNAL_SERVER_ERROR,
        responseCodes.status.ERROR,
    );
};

module.exports = { createResponse, createResponseSuccess, createResponseError };