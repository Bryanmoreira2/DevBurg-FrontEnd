import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    'pk_test_51QT8mTJNUON5yKTjl4fUe8Cvki0ynU6apLc9MC2vFsS3R7v8phmCCWeZkdUtS9M7KMrXluF9WXqZGNEt6RtR23sJ008Ggyy3i6'
)

export default stripePromise