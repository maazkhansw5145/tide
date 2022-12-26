import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51MCwf9CK03JH8k6TnsHKf6GPg7RbNsRwQmC1BPZaf9lGnfU21noTBCWuTFWuGB07dCj4lcOCOBxsk5fDIKUGdiFL00Rtu5NK42");
  }
  return stripePromise;
};

export default getStripe;