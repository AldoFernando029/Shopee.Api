const shopeeService = require('./Shopee-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getDiscounts(request, response, next) {
  try {
    const discounts = await shopeeService.getDiscounts();

    return response.status(200).json(discounts);
  } catch (error) {
    return next(error);
  }
}

async function createDiscount(request, response, next) {
  try {
    const { discount_name, discount_value, start_time, end_time } = request.body;

    if (!discount_name || !discount_value || !start_time || !end_time) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All discount fields are required');
    }

    const discount = await shopeeService.createDiscount({
      discount_name,
      discount_value,
      start_time,
      end_time,
    });

    return response.status(200).json(discount);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getDiscounts,
  createDiscount,
};
