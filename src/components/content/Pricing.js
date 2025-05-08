export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}pricing`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['pricing', 'py-5', 'bg-light'],
        droppable: true,
        traits: [
          // Plans per row trait removed
        ],
        components: `
          <div class="container">
            <div class="row text-center mb-5">
              <div class="col-12">
                <h2 class="fw-bold">Pricing Plans</h2>
                <p class="lead">Choose the perfect plan for your needs</p>
              </div>
            </div>
            <div class="row g-4 align-items-center">
              <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                  <div class="card-body p-5">
                    <h5 class="card-title text-center mb-4">Basic</h5>
                    <h1 class="card-text text-center mb-4">
                      <span class="display-4">$19</span>
                      <span class="text-muted">/mo</span>
                    </h1>
                    <ul class="list-unstyled mb-4">
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 1</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 2</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 3</li>
                      <li class="text-muted"><i class="fas fa-times text-danger me-2"></i>Feature 4</li>
                    </ul>
                    <div class="text-center">
                      <button class="btn btn-outline-primary btn-lg px-4">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 shadow border-primary">
                  <div class="card-body p-5">
                    <div class="ribbon ribbon-top-right"><span>Popular</span></div>
                    <h5 class="card-title text-center mb-4">Pro</h5>
                    <h1 class="card-text text-center mb-4">
                      <span class="display-4">$49</span>
                      <span class="text-muted">/mo</span>
                    </h1>
                    <ul class="list-unstyled mb-4">
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 1</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 2</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 3</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 4</li>
                    </ul>
                    <div class="text-center">
                      <button class="btn btn-primary btn-lg px-4">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                  <div class="card-body p-5">
                    <h5 class="card-title text-center mb-4">Enterprise</h5>
                    <h1 class="card-text text-center mb-4">
                      <span class="display-4">$99</span>
                      <span class="text-muted">/mo</span>
                    </h1>
                    <ul class="list-unstyled mb-4">
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 1</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 2</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 3</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 4</li>
                      <li class="mb-3"><i class="fas fa-check text-success me-2"></i>Feature 5</li>
                    </ul>
                    <div class="text-center">
                      <button class="btn btn-outline-primary btn-lg px-4">Contact Us</button>
                    </div>
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