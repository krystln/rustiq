import { NextRequest, NextResponse } from "next/server";

// This is your test secret API key.
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const calculateOrderAmount = (items: any[]) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

async function handler(req: NextRequest) {
  const body = await req.json();
  const { items } = body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "inr",
    description: "T-shirt",

    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json(
    { clientSecret: paymentIntent.client_secret },
    { status: 200 },
  );
}

export { handler as POST };
