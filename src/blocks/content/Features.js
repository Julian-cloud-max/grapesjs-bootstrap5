export default (bm, prefix) => {
  bm.add(`${prefix}features`, {
    label: 'Features',
    category: 'Content',
    content: {
      type: `${prefix}features`
    },
    attributes: {
      class: 'fas fa-th-large'
    }
  });
}; 