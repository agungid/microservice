const apiAdapter = require('../../apiAdapter');

const {
    URL_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
    //store image to service media
    try {
        const media = await api.post('/media', req.body);
        return res.json(media.data)
    } catch (error) {
        // cek service avalaible
        if(error.code === 'ECONNREFUSED') {
            res.status(500).json({ status: 'error', message: 'Service unavailable' });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}