const zerionAPI = require('zerion-js');

exports.handler = async (event) => {
    const IFB_SERVER = process.env.IFB_SERVER;
    const IFB_CLIENT_KEY = process.env.IFB_CLIENT_KEY;
    const IFB_CLIENT_SECRET = process.env.IFB_CLIENT_SECRET;

    try {
        const ifb = new zerionAPI.IFB(IFB_SERVER, IFB_CLIENT_KEY, IFB_CLIENT_SECRET);
        await ifb.connect();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({access_token: ifb.access_token})
        };
    } catch(err) {
        return {
            statusCode: 500,
            body: err.message || err
        }
    }
    
}