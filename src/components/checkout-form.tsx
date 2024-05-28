"use client";

import React from "react";
import {
  PaymentElement,
  AddressElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  StripeAddressElementOptions,
  StripePaymentElementOptions,
} from "@stripe/stripe-js";
import { AlertCircleIcon, LoaderIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent!.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message ?? null);
    } else {
      setMessage("An unexpected error occurred. Please try again later.");
    }

    setIsLoading(false);
    return false;
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
    applePay: {},
    business: {
      name: "Example, Inc.",
    },
  };

  const addressElementOptions: StripeAddressElementOptions = {
    mode: "billing",
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex w-1/3 flex-col items-center"
    >
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <AddressElement id="address-element" options={addressElementOptions} />
      <Button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        variant="default"
        className="mt-4 w-28 "
      >
        <span>
          {isLoading ? <LoaderIcon className="animate-spin" /> : "Pay now"}
        </span>
      </Button>
      {/* Show any error or success messages */}
      {message && (
        <span className="flex items-center justify-center gap-1 text-red-600">
          <AlertCircleIcon />
          {message}
        </span>
      )}
    </form>
  );
}
