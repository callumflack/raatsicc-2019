const path = require("path");
const Stripe = require("stripe");

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env")
});

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async function() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: "Donation",
        amount: 500,
        currency: "AUD",
        quantity: 1
      }
    ],
    success_url: "https://www.raatsicc.org.au?donation=success",
    cancel_url: "https://www.raatsicc.org.au?donation=cancelled"
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      session
    })
  };
};
