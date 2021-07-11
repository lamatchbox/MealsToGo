import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51IXddMEbAQRKkkrIfmSmInZ7aYARl3VXKuAlmsisigtkqb7b7AxGBl9qWfvRY2tOHim9TKYAIAsONAH9eiYtbfeI00FT6Sp0sU"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
