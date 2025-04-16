const paymentRepository = require('./Payment-repository');

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
  // Validasi input
  if (!payment_reference_id) {
    throw new Error('Payment reference ID is required');
  }
  if (!merchant_ext_id) {
    throw new Error('Merchant external ID is required');
  }
  if (!store_ext_id) {
    throw new Error('Store external ID is required');
  }
  if (!access_token) {
    throw new Error('Access token is required');
  }
  if (!amount || amount <= 0) {
    throw new Error('Amount must be greater than zero');
  }
  if (!currency) {
    throw new Error('Currency is required');
  }
  if (!return_url) {
    throw new Error('Return URL is required');
  }
  if (!expiry_time) {
    throw new Error('Expiry time is required');
  }

  // Panggil repository untuk membuat pembayaran
  const paymentPayload = await paymentRepository.createPayment({
    payment_reference_id,
    merchant_ext_id,
    store_ext_id,
    access_token,
    amount,
    currency,
    return_url,
    use_coin,
    expiry_time,
  });

  return paymentPayload;
}

module.exports = {
  createPayment,
};
