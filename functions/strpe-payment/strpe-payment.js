// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')('sk_test_51IFgsOEKmVUFQ1LBfuKhbH2qLIkk5bP0ZkLQDpgYmYGepVCU5nPu9ItMBNFwaQzqKfjEVrDVoJZqdb1ys8lUGuLB00jQArxKLu');

const handler = async (event) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
