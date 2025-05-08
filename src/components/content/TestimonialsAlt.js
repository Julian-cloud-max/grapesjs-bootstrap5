export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}testimonials-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['testimonials-alt', 'py-5', 'bg-light'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row mb-5 text-center">
              <div class="col-lg-8 mx-auto">
                <h2 class="fw-bold">What Our Customers Say</h2>
                <p class="lead">Real stories from satisfied customers around the world</p>
              </div>
            </div>
            
            <div class="position-relative testimonial-slider">
              <!-- Testimonial 1 -->
              <div class="card border-0 shadow-sm p-4 mx-2 mb-4">
                <div class="testimonial-rating text-warning mb-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="testimonial-text mb-4">"This platform has completely transformed how we manage our business. The intuitive interface and powerful features have saved us countless hours and significantly improved our workflow efficiency."</p>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="https://via.placeholder.com/60x60" class="rounded-circle" alt="Customer">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0 fw-bold">Jennifer Lawrence</h6>
                    <p class="mb-0 text-muted small">Marketing Director, TechSolutions Inc.</p>
                  </div>
                  <div class="flex-shrink-0">
                    <img src="https://via.placeholder.com/100x30" alt="Company logo" class="img-fluid">
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 2 -->
              <div class="card border-0 shadow-sm p-4 mx-2 mb-4">
                <div class="testimonial-rating text-warning mb-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="testimonial-text mb-4">"After trying several competing products, we decided to go with this solution, and we couldn't be happier. The customer support is exceptional, and the platform's reliability has been crucial for our day-to-day operations."</p>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="https://via.placeholder.com/60x60" class="rounded-circle" alt="Customer">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0 fw-bold">Michael Thompson</h6>
                    <p class="mb-0 text-muted small">CEO, Innovate Partners</p>
                  </div>
                  <div class="flex-shrink-0">
                    <img src="https://via.placeholder.com/100x30" alt="Company logo" class="img-fluid">
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 3 -->
              <div class="card border-0 shadow-sm p-4 mx-2">
                <div class="testimonial-rating text-warning mb-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="testimonial-text mb-4">"We've seen a 40% increase in productivity since implementing this solution. The automation features and integrations with our existing tools have streamlined our processes significantly. Highly recommended!"</p>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="https://via.placeholder.com/60x60" class="rounded-circle" alt="Customer">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0 fw-bold">Sarah Chen</h6>
                    <p class="mb-0 text-muted small">Operations Manager, GlobalTech</p>
                  </div>
                  <div class="flex-shrink-0">
                    <img src="https://via.placeholder.com/100x30" alt="Company logo" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-lg-8 mx-auto text-center">
                <p class="text-primary fw-bold mb-0">Trusted by over 5,000+ satisfied customers worldwide</p>
                <div class="d-flex flex-wrap justify-content-center align-items-center mt-4 gap-4">
                  <img src="https://via.placeholder.com/120x40" alt="Client logo" class="img-fluid">
                  <img src="https://via.placeholder.com/120x40" alt="Client logo" class="img-fluid">
                  <img src="https://via.placeholder.com/120x40" alt="Client logo" class="img-fluid">
                  <img src="https://via.placeholder.com/120x40" alt="Client logo" class="img-fluid">
                  <img src="https://via.placeholder.com/120x40" alt="Client logo" class="img-fluid">
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 