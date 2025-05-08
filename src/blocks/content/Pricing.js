export default (bm, prefix) => {
  bm.add(`${prefix}pricing`, {
    label: 'Pricing Tables',
    category: 'Content',
    content: {
      type: `${prefix}pricing`
    },
    attributes: {
      class: 'fas fa-tags'
    }
  });
}; 