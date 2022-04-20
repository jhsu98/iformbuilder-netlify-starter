const zerionAPI = require('zerion-js');

exports.handler = async (event) => {
    const SERVER = process.env.SERVER;
    const CLIENT_KEY = process.env.CLIENT_KEY;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const PARAMS = {
        ifb_region: 'US'
    };

    const ifb = new zerionAPI.IFB(SERVER, CLIENT_KEY, CLIENT_SECRET, PARAMS);
    await ifb.connect();

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({access_token: ifb.access_token})
    };
}