export default (bm, prefix) => {
  bm.add(`${prefix}hero-alt`, {
    label: 'Alternative Hero',
    category: 'Content',
    content: {
      type: `${prefix}hero-alt`
    },
    attributes: {
      class: 'fas fa-star'
    }
  });
}; 