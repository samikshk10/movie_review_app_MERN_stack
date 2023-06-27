const tmdbApi = require("../api/tmdb.api.js");

const responseHandler = require("../handlers/response.handler.js");


const getList = async (req, res) => {

    try {
        const {
            page
        } = req.query;

        const {
            mediaType,
            mediaCategory
        } = req.params;

        const response = await tmdbApi.mediaList({
            mediaType,
            mediaCategory,
            page
        });

        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};
const getGenres = async (req, res) => {
    try {
        const {
            mediaType
        } = req.params;

        const response = await tmdbApi.mediaGenres({
            mediaType
        });

        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};


module.exports = {
    getList,
    getGenres
};