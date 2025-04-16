const paymentService = require('./Payment-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createPayment(request, response, next) {
  try {
    const {
      invoice_number,
      amount,
      currency,
      customer_id,
      ip_address,
      return_url,
    } = request.body;

    // Validasi input
    if (!invoice_number) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invoice number is required');
    }
    if (!amount || amount <= 0) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Amount must be greater than zero');
    }
    if (!currency) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Currency is required');
    }
    if (!customer_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Customer ID is required');
    }
    if (!ip_address) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'IP address is required');
    }
    if (!return_url) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Return URL is required');
    }

    // Panggil service untuk membuat pembayaran
    const paymentResponse = await paymentService.createPayment({
      invoice_number,
      amount,
      currency,
      customer_id,
      ip_address,
      return_url,
    });

    return response.status(201).json(paymentResponse);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createPayment,
};
