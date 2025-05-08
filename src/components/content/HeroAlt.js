export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}hero-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['hero-alt', 'py-5'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb-5">
                <h1 class="display-4 fw-bold">Create Beautiful Websites</h1>
                <p class="lead mb-4 mx-auto" style="max-width: 600px;">A modern and clean template design for your next web project. Easily customizable and responsive.</p>
                <div>
                  <button class="btn btn-primary btn-lg me-2">Get Started</button>
                  <button class="btn btn-outline-secondary btn-lg">Learn More</button>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body text-center p-4">
                    <i class="fas fa-rocket text-primary fa-3x mb-3"></i>
                    <h5 class="card-title">Fast & Reliable</h5>
                    <p class="card-text">Optimized for speed and performance</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body text-center p-4">
                    <i class="fas fa-mobile-alt text-primary fa-3x mb-3"></i>
                    <h5 class="card-title">Fully Responsive</h5>
                    <p class="card-text">Looks great on all devices</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body text-center p-4">
                    <i class="fas fa-magic text-primary fa-3x mb-3"></i>
                    <h5 class="card-title">Easy to Customize</h5>
                    <p class="card-text">Tailor it to your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 