export default (bm, prefix) => {
  bm.add(`${prefix}faq-alt`, {
    label: 'Enhanced FAQ',
    category: 'Content',
    content: {
      type: `${prefix}faq-alt`
    },
    attributes: {
      class: 'fas fa-question-circle'
    }
  });
}; 