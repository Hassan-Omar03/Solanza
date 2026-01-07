import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  // 👇 pehle sirf price tha, ab currency bhi add
  const price = searchParams.get("amount");
  const currency = searchParams.get("currency");

  if (!price || !currency) {
    return NextResponse.json(
      { error: "Missing amount or currency" },
      { status: 400 }
    );
  }

  // ❌ non-null assertion hata di (!)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          // ❌ hardcoded "aed" hata di
          // ✅ dynamic currency
          currency: currency.toLowerCase(),
          product_data: {
            name: "Web Services Payment",
          },
          unit_amount: Math.round(Number(price) * 100),
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  return NextResponse.json({
    id: session.id,
    url: session.url,
  });
}
