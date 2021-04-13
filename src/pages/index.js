import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const promise = loadStripe("pk_test_51IFgsOEKmVUFQ1LBOrfG3gGLB0R824zGRnmece2ZXQEdXvXVDJPD826ICmpgLXhpGjMMEaqLy5Elpv7QmKtXDNKa00LK32hCBL");

export default function Home() {
    return <div>
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </div>
}