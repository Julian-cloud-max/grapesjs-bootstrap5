export default (bm, prefix = '') => {
  bm.add(`${prefix}carousel`, {
    label: `<i class="fa fa-sliders-h"></i> 
            <div class="gjs-block-label">Carousel</div>`,
    category: 'Advanced Components',
    content: { type: `${prefix}carousel` },
    attributes: {
      class: 'fas fa-images',
      title: 'Interactive carousel with customizable options and image management'
    }
  });
}; 