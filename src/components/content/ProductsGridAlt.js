export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}products-grid-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['products-alt', 'py-5'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row mb-5 text-center">
              <div class="col-12">
                <h2 class="fw-bold">Featured Products</h2>
                <p class="lead">Discover our best selling items</p>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-md-6 col-lg-3 d-flex">
                <div class="card border-0 shadow-sm h-100 position-relative">
                  <span class="position-absolute top-0 end-0 badge bg-danger m-3">Sale</span>
                  <img src="https://via.placeholder.com/300x180" class="card-img-top" alt="Product">
                  <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="card-title mb-0">Premium Watch</h5>
                      <div class="text-primary fw-bold">$149.99</div>
                    </div>
                    <div class="mb-2">
                      <span class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </span>
                      <small class="text-muted">(128)</small>
                    </div>
                    <p class="card-text">Elegant design with premium materials and advanced features.</p>
                    <div class="mt-auto pt-3 d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
                      <button class="btn btn-sm btn-primary"><i class="fas fa-shopping-cart me-1"></i> Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 col-lg-3 d-flex">
                <div class="card border-0 shadow-sm h-100">
                  <img src="https://via.placeholder.com/300x180" class="card-img-top" alt="Product">
                  <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="card-title mb-0">Wireless Earbuds</h5>
                      <div class="text-primary fw-bold">$89.99</div>
                    </div>
                    <div class="mb-2">
                      <span class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </span>
                      <small class="text-muted">(94)</small>
                    </div>
                    <p class="card-text">High-quality sound with noise cancellation and long battery life.</p>
                    <div class="mt-auto pt-3 d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
                      <button class="btn btn-sm btn-primary"><i class="fas fa-shopping-cart me-1"></i> Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 col-lg-3 d-flex">
                <div class="card border-0 shadow-sm h-100">
                  <img src="https://via.placeholder.com/300x180" class="card-img-top" alt="Product">
                  <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="card-title mb-0">Smart Camera</h5>
                      <div class="text-primary fw-bold">$199.99</div>
                    </div>
                    <div class="mb-2">
                      <span class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <small class="text-muted">(217)</small>
                    </div>
                    <p class="card-text">4K resolution with AI features and enhanced low-light performance.</p>
                    <div class="mt-auto pt-3 d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
                      <button class="btn btn-sm btn-primary"><i class="fas fa-shopping-cart me-1"></i> Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 col-lg-3 d-flex">
                <div class="card border-0 shadow-sm h-100 position-relative">
                  <span class="position-absolute top-0 end-0 badge bg-success m-3">New</span>
                  <img src="https://via.placeholder.com/300x180" class="card-img-top" alt="Product">
                  <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="card-title mb-0">Fitness Tracker</h5>
                      <div class="text-primary fw-bold">$79.99</div>
                    </div>
                    <div class="mb-2">
                      <span class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </span>
                      <small class="text-muted">(76)</small>
                    </div>
                    <p class="card-text">Track your health metrics and activity with this water-resistant device.</p>
                    <div class="mt-auto pt-3 d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
                      <button class="btn btn-sm btn-primary"><i class="fas fa-shopping-cart me-1"></i> Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12 text-center">
                <a href="#" class="btn btn-outline-primary">View All Products</a>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 