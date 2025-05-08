export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}testimonials`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['testimonials', 'py-5'],
        droppable: true,
        traits: [
          // Testimonials per row trait removed
        ],
        components: `
          <div class="container">
            <div class="row text-center mb-5">
              <div class="col-12">
                <h2 class="fw-bold">What Our Clients Say</h2>
                <p class="lead">Real feedback from real customers</p>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0">
                        <img src="https://via.placeholder.com/64x64" class="rounded-circle" alt="Client">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="mb-1">Sarah Johnson</h5>
                        <p class="text-muted mb-0">Marketing Director</p>
                      </div>
                      <div class="flex-shrink-0 text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p class="card-text">"Outstanding service and amazing results! The team went above and beyond our expectations."</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0">
                        <img src="https://via.placeholder.com/64x64" class="rounded-circle" alt="Client">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="mb-1">Michael Chen</h5>
                        <p class="text-muted mb-0">Tech Entrepreneur</p>
                      </div>
                      <div class="flex-shrink-0 text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p class="card-text">"The best decision we made for our business. Professional, efficient, and innovative solutions."</p>
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