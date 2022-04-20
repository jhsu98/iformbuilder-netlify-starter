exports.handler = async (event) => {
    const body = { message: 'Hello World' };
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
}