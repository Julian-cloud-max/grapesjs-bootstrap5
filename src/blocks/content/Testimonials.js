export default (bm, prefix) => {
  bm.add(`${prefix}testimonials`, {
    label: 'Testimonials',
    category: 'Content',
    content: {
      type: `${prefix}testimonials`
    },
    attributes: {
      class: 'fas fa-quote-right'
    }
  });
}; 