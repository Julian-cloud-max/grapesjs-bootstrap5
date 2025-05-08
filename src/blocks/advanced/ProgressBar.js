export default (bm, prefix) => {
  bm.add(`${prefix}progress-bar`, {
    label: 'Progress Bar',
    category: 'Advanced Components',
    content: {
      type: `${prefix}progress-bar`
    },
    attributes: {
      class: 'fas fa-tasks'
    }
  });
}; 