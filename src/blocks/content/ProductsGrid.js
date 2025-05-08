export default (bm, prefix) => {
  bm.add(`${prefix}products-grid`, {
    label: 'Products Grid',
    category: 'Content',
    content: {
      type: `${prefix}products-grid`
    },
    attributes: {
      class: 'fas fa-shopping-cart'
    }
  });
}; 