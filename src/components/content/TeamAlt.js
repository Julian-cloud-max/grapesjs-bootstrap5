export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}team-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['team-alt', 'py-5'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row mb-5 text-center">
              <div class="col-12">
                <h2 class="fw-bold">Meet Our Leadership</h2>
                <p class="lead">The talented individuals behind our success</p>
              </div>
            </div>
            
            <div class="row g-4">
              <div class="col-lg-6">
                <div class="card border-0 shadow-sm h-100">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://via.placeholder.com/300x400" class="img-fluid rounded-start h-100 object-fit-cover" alt="Team member" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column h-100">
                        <div>
                          <h5 class="card-title fw-bold">Sarah Johnson</h5>
                          <p class="card-subtitle mb-2 text-primary">Chief Executive Officer</p>
                          <p class="card-text">With over 15 years of industry experience, Sarah leads our company with vision and passion, driving innovation and excellence in everything we do.</p>
                        </div>
                        <div class="mt-auto">
                          <div class="d-flex pt-3">
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fas fa-envelope"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6">
                <div class="card border-0 shadow-sm h-100">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://via.placeholder.com/300x400" class="img-fluid rounded-start h-100 object-fit-cover" alt="Team member" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column h-100">
                        <div>
                          <h5 class="card-title fw-bold">Michael Chen</h5>
                          <p class="card-subtitle mb-2 text-primary">Chief Technology Officer</p>
                          <p class="card-text">Michael brings technical brilliance and strategic thinking to our team, guiding our product development and technological innovations.</p>
                        </div>
                        <div class="mt-auto">
                          <div class="d-flex pt-3">
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fas fa-envelope"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6">
                <div class="card border-0 shadow-sm h-100">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://via.placeholder.com/300x400" class="img-fluid rounded-start h-100 object-fit-cover" alt="Team member" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column h-100">
                        <div>
                          <h5 class="card-title fw-bold">Emily Rodriguez</h5>
                          <p class="card-subtitle mb-2 text-primary">Creative Director</p>
                          <p class="card-text">Emily's creative vision and design expertise shape our brand identity and ensure our products are both beautiful and functional.</p>
                        </div>
                        <div class="mt-auto">
                          <div class="d-flex pt-3">
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-dribbble"></i>
                            </a>
                            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fas fa-envelope"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6">
                <div class="card border-0 shadow-sm h-100">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://via.placeholder.com/300x400" class="img-fluid rounded-start h-100 object-fit-cover" alt="Team member" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column h-100">
                        <div>
                          <h5 class="card-title fw-bold">David Wilson</h5>
                          <p class="card-subtitle mb-2 text-primary">Chief Marketing Officer</p>
                          <p class="card-text">David's strategic marketing expertise and customer-focused approach drive our brand awareness and business growth strategies.</p>
                        </div>
                        <div class="mt-auto">
                          <div class="d-flex pt-3">
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="me-2 btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="btn btn-sm btn-outline-primary rounded-circle">
                              <i class="fas fa-envelope"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12 text-center">
                <a href="#" class="btn btn-outline-primary">Meet the Full Team</a>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 