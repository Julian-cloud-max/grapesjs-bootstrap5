export default (bm, prefix) => {
  bm.add(`${prefix}products-grid-alt`, {
    label: 'Enhanced Products Grid',
    category: 'Content',
    content: {
      type: `${prefix}products-grid-alt`
    },
    attributes: {
      class: 'fas fa-shopping-basket'
    }
  });
}; 