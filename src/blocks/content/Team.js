export default (bm, prefix) => {
  bm.add(`${prefix}team`, {
    label: 'Team Section',
    category: 'Content',
    content: {
      type: `${prefix}team`
    },
    attributes: {
      class: 'fas fa-users'
    }
  });
}; 