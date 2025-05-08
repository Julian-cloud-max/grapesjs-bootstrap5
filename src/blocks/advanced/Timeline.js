export default (bm, prefix) => {
  bm.add(`${prefix}timeline`, {
    label: 'Timeline',
    category: 'Advanced Components',
    content: {
      type: `${prefix}timeline`
    },
    attributes: {
      class: 'fas fa-history'
    }
  });
}; 