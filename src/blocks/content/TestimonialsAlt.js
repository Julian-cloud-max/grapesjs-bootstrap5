export default (bm, prefix) => {
  bm.add(`${prefix}testimonials-alt`, {
    label: 'Enhanced Testimonials',
    category: 'Content',
    content: {
      type: `${prefix}testimonials-alt`
    },
    attributes: {
      class: 'fas fa-comment-dots'
    }
  });
}; 