export default (bm, prefix) => {
  bm.add(`${prefix}faq`, {
    label: 'FAQ Section',
    category: 'Content',
    content: {
      type: `${prefix}faq`
    },
    attributes: {
      class: 'fas fa-question-circle'
    }
  });
}; 