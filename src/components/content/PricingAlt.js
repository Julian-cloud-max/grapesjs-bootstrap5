export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}pricing-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['pricing-alt', 'py-5'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row mb-5 text-center">
              <div class="col-lg-8 mx-auto">
                <h2 class="fw-bold mb-3">Transparent Pricing Plans</h2>
                <p class="lead mb-4">Choose the perfect plan that works for your needs with our simple, transparent pricing.</p>
                <div class="d-inline-flex p-2 rounded-pill bg-light">
                  <div class="form-check-inline mb-0 d-flex align-items-center">
                    <label class="form-check-label ms-3 small fw-bold" for="billingToggle">Annual <span class="badge bg-primary ms-2">Save 20%</span></label>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row g-4 align-items-stretch">
              <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm hover-lift">
                  <div class="card-body p-4 p-xl-5">
                    <div class="text-center mb-4">
                      <h3 class="mb-1">Starter</h3>
                      <p class="text-muted mb-4">Perfect for individuals and small projects</p>
                      <div class="pricing-value">
                        <h2 class="display-5 mb-0 fw-bold">$29</h2>
                        <p class="text-muted">per month</p>
                      </div>
                    </div>
                    
                    <hr class="my-4">
                    
                    <ul class="list-unstyled mb-4">
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Up to 5 projects</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>20GB storage</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Basic analytics</span>
                      </li>
                      <li class="d-flex align-items-center mb-3 text-muted">
                        <i class="fas fa-times text-danger me-3"></i>
                        <span>Advanced features</span>
                      </li>
                      <li class="d-flex align-items-center mb-3 text-muted">
                        <i class="fas fa-times text-danger me-3"></i>
                        <span>Priority support</span>
                      </li>
                    </ul>
                    
                    <a href="#" class="btn btn-outline-primary w-100 py-3">Get Started</a>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4">
                <div class="card h-100 border-0 shadow position-relative border-primary hover-lift">
                  <div class="position-absolute top-0 start-50 translate-middle badge bg-primary py-2 px-3 rounded-pill">
                    Most Popular
                  </div>
                  <div class="card-body p-4 p-xl-5">
                    <div class="text-center mb-4">
                      <h3 class="mb-1">Professional</h3>
                      <p class="text-muted mb-4">Best for growing businesses and teams</p>
                      <div class="pricing-value">
                        <h2 class="display-5 mb-0 fw-bold">$79</h2>
                        <p class="text-muted">per month</p>
                      </div>
                    </div>
                    
                    <hr class="my-4">
                    
                    <ul class="list-unstyled mb-4">
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Up to 20 projects</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>100GB storage</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Advanced analytics</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Advanced features</span>
                      </li>
                      <li class="d-flex align-items-center mb-3 text-muted">
                        <i class="fas fa-times text-danger me-3"></i>
                        <span>Priority support</span>
                      </li>
                    </ul>
                    
                    <a href="#" class="btn btn-primary w-100 py-3">Get Started</a>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm hover-lift">
                  <div class="card-body p-4 p-xl-5">
                    <div class="text-center mb-4">
                      <h3 class="mb-1">Enterprise</h3>
                      <p class="text-muted mb-4">For large organizations and advanced needs</p>
                      <div class="pricing-value">
                        <h2 class="display-5 mb-0 fw-bold">$199</h2>
                        <p class="text-muted">per month</p>
                      </div>
                    </div>
                    
                    <hr class="my-4">
                    
                    <ul class="list-unstyled mb-4">
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Unlimited projects</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>1TB storage</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>Custom analytics</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>All premium features</span>
                      </li>
                      <li class="d-flex align-items-center mb-3">
                        <i class="fas fa-check text-success me-3"></i>
                        <span>24/7 priority support</span>
                      </li>
                    </ul>
                    
                    <a href="#" class="btn btn-outline-primary w-100 py-3">Contact Sales</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5 pt-3">
              <div class="col-lg-8 mx-auto text-center">
                <p class="text-muted mb-0">All plans include a 14-day free trial. No credit card required. <a href="#" class="text-decoration-none">View full plan comparison</a></p>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 