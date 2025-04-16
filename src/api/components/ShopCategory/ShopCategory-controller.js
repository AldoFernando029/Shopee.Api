const shopeeService = require('./shopee-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getShopCategories(request, response, next) {
  try {
    const { language } = request.query;

    // optional validation
    if (!language) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Language parameter is required');
    }

    const categories = await shopeeService.getShopCategories(language);

    return response.status(200).json(categories);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getShopCategories,
};
