export default (bm, prefix) => {
  bm.add(`${prefix}hero`, {
    label: 'Hero Section',
    category: 'Content',
    content: {
      type: `${prefix}hero`
    },
    attributes: {
      class: 'fas fa-home'
    }
  });
}; 