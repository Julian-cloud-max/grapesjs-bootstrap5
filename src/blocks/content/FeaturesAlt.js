export default (bm, prefix) => {
  bm.add(`${prefix}features-alt`, {
    label: 'Alternative Features',
    category: 'Content',
    content: {
      type: `${prefix}features-alt`
    },
    attributes: {
      class: 'fas fa-th-list'
    }
  });
}; 