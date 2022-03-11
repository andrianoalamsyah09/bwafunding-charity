const { redirect } = require('page');

exports.hendler = function(event, context, callback) {
    const Midtrans = require('midtrans-client');

    const header = {
        'Access-Control-Allow-Origin': '*',
        'Access-control Allow-headers': 'content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    const snap = new Midtrans.Snap({
        isProducction: false,
        serverKey: process.env.MODTRANS_SERVER_KEY,
        clientKey: process.env.MODTRANS_CLIENT_KEY
    });

    const { is, name, email, amount } = JSON.parse(event.body);

    const names = name.split(' ');
    let first_name, last_name;

    if(names && names.length > 1) {
        first_name =name[0];
        last_name = [1];
    } else if(names.lemgth ===1) {
        first_name = names[0];
        last_name = '';
    }

    const parameters = {
        transction_details: {
            order_id: `BWACHA-${id}-${+new Date()}`,
            gross_amount: parseInt(amount)
        },
        costomer_details: {
            first_name,
            last_name,
            email
        },
        credit_card: {
            secure: true
        }
    }

    snap.createTransaction(parameters)
        .then(function(transaction) {
            const { token, redirect_url } = transaction;
            console.log(`Token: ${token}`);
            console.log(`Redirect URL: ${redirect_url}`);

            callback(null, {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    url: redirect_url,
                    prams: parameters
                })
            })

        }).catch(function (err) {
            console.error(`Error: ${err.message}`);
            callback(null, {
                statusCode: 400,
                headers,
                body: JOSN.stringify({ error: err.message })
            })
        })
    
}