export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}products-grid`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['products', 'py-5'],
        droppable: true,
        traits: [
          // Columns trait removed
        ],
        components: `
          <div class="container">
            <div class="row g-4">
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product">
                  <div class="card-body">
                    <h5 class="card-title">Product 1</h5>
                    <p class="card-text">Product description goes here.</p>
                    <p class="card-text"><strong>$99.99</strong></p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product">
                  <div class="card-body">
                    <h5 class="card-title">Product 2</h5>
                    <p class="card-text">Product description goes here.</p>
                    <p class="card-text"><strong>$149.99</strong></p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product">
                  <div class="card-body">
                    <h5 class="card-title">Product 3</h5>
                    <p class="card-text">Product description goes here.</p>
                    <p class="card-text"><strong>$199.99</strong></p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
      // Removed updateColumns event handler
    }
  });
}; 