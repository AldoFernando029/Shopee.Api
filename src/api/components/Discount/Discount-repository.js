// Mock data untuk testing tanpa crypto & http
async function getDiscounts() {
  // return simulasi response dari Shopee
  return {
    message: 'Mocked list of discounts',
    discounts: [
      { id: 1, name: 'Promo April', value: 10 },
      { id: 2, name: 'Diskon Lebaran', value: 15 },
    ],
  };
}

async function createDiscount(discount_name, discount_value, start_time, end_time) {
  // simulasi pembuatan diskon
  if (!discount_name || !discount_value || !start_time || !end_time) {
    throw new Error('All fields are required');
  }

  return {
    message: 'Mocked discount created',
    data: {
      id: Math.floor(Math.random() * 1000),
      discount_name,
      discount_value,
      start_time,
      end_time,
    },
  };
}

module.exports = {
  getDiscounts,
  createDiscount,
};
