const { v4: uuidv4 } = require('uuid');

async function createPayment({
  payment_reference_id,
  merchant_ext_id,
  store_ext_id,
  access_token,
  amount,
  currency,
  return_url,
  use_coin = false,
  expiry_time,
}) {
  // Generate a unique request_id
  const request_id = uuidv4();

  // Construct the payment request payload
  const payload = {
    request_id,
    payment_reference_id,
    merchant_ext_id,
    store_ext_id,
    access_token,
    amount,
    currency,
    return_url,
    use_coin,
    expiry_time,
  };

  // Since external HTTP requests and crypto operations are not allowed,
  // this function will return the constructed payload for demonstration purposes.
  // In a real implementation, you would send this payload to ShopeePay's API endpoint.

  return payload;
}

module.exports = {
  createPayment,
};
