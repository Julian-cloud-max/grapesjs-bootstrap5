export default (bm, prefix) => {
  bm.add(`${prefix}pricing-alt`, {
    label: 'Modern Pricing Table',
    category: 'Content',
    content: {
      type: `${prefix}pricing-alt`
    },
    attributes: {
      class: 'fas fa-tags'
    }
  });
}; 