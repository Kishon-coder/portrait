// ─────────────────────────────────────────────────────────────
// Edit prices/sizes here. Two pricing categories, each with a
// list of size/face options and a price. Update shippingInfo
// for delivery charges.
// ─────────────────────────────────────────────────────────────

export const pricingCategories = [
  {
    title: 'Pencil Art Portrait',
    subtitle: 'Lamination Frame',
    items: [
      { size: 'A4 Size Single Face', price: 'Rs 900' },
      { size: 'A3 Size Single Face', price: 'Rs 1100' },
      { size: 'A3 Size Double Face', price: 'Rs 1800' },
      { size: 'A3 Size Three Face', price: 'Rs 2600' },
      { size: 'A3 Size Four Face', price: 'Rs 3300' },
      { size: 'A2 Size Double Face', price: 'Rs 2800' },
    ],
  },
  {
    title: 'Colour Art Portrait',
    subtitle: 'With Frame',
    items: [
      { size: 'A4 Size Single Face', price: 'Rs 1400' },
      { size: 'A3 Size Single Face', price: 'Rs 1600' },
      { size: 'A3 Size Double Face', price: 'Rs 2800' },
      { size: 'A3 Size Three Face', price: 'Rs 4400' },
      { size: 'A3 Size Four Face', price: 'Rs 5600' },
      { size: 'A2 Size Double Face', price: 'Rs 5600' },
    ],
  },
];

export const shippingInfo = {
  heading: 'Shipping All Over India',
  tamilNadu: 'Rs 100',
  otherStates: 'Rs 150',
};