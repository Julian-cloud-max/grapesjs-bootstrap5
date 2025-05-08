export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}features-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['features-alt', 'py-5'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row mb-5 text-center">
              <div class="col-12">
                <h2 class="fw-bold">Why Choose Us</h2>
                <p class="lead">Discover the unique benefits that set us apart</p>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-md-6 d-flex">
                <div class="card border-0 w-100">
                  <div class="card-body d-flex">
                    <div class="feature-icon text-primary me-4">
                      <i class="fas fa-shield-alt fa-2x"></i>
                    </div>
                    <div>
                      <h5 class="card-title">Enhanced Security</h5>
                      <p class="card-text">Industry-leading security protocols to keep your data safe and protected at all times.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 d-flex">
                <div class="card border-0 w-100">
                  <div class="card-body d-flex">
                    <div class="feature-icon text-primary me-4">
                      <i class="fas fa-tachometer-alt fa-2x"></i>
                    </div>
                    <div>
                      <h5 class="card-title">Blazing Fast</h5>
                      <p class="card-text">Optimized for speed with lightning-fast load times and responsive performance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 d-flex">
                <div class="card border-0 w-100">
                  <div class="card-body d-flex">
                    <div class="feature-icon text-primary me-4">
                      <i class="fas fa-headset fa-2x"></i>
                    </div>
                    <div>
                      <h5 class="card-title">24/7 Support</h5>
                      <p class="card-text">Our dedicated team is always available to help with any questions or issues.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 d-flex">
                <div class="card border-0 w-100">
                  <div class="card-body d-flex">
                    <div class="feature-icon text-primary me-4">
                      <i class="fas fa-sync-alt fa-2x"></i>
                    </div>
                    <div>
                      <h5 class="card-title">Regular Updates</h5>
                      <p class="card-text">Constant improvements and new features to keep your experience cutting-edge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12 text-center">
                <a href="#" class="btn btn-primary btn-lg">Learn More About Our Features</a>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 