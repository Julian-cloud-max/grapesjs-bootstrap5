export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}team`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['team', 'py-5'],
        droppable: true,
        traits: [
          // Members per row trait removed
        ],
        components: `
          <div class="container">
            <div class="row text-center">
              <div class="col-12 mb-5">
                <h2 class="fw-bold">Our Team</h2>
                <p class="lead">Meet the amazing people behind our success</p>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://via.placeholder.com/300x300" class="card-img-top rounded-circle mx-auto mt-3" style="width: 150px; height: 150px;" alt="Team member">
                  <div class="card-body text-center">
                    <h5 class="card-title">John Doe</h5>
                    <p class="card-text text-muted">CEO & Founder</p>
                    <p class="card-text">Passionate about creating amazing products and leading teams.</p>
                    <div class="social-links">
                      <a href="#" class="text-dark me-2"><i class="fab fa-linkedin"></i></a>
                      <a href="#" class="text-dark me-2"><i class="fab fa-twitter"></i></a>
                      <a href="#" class="text-dark"><i class="fab fa-github"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://via.placeholder.com/300x300" class="card-img-top rounded-circle mx-auto mt-3" style="width: 150px; height: 150px;" alt="Team member">
                  <div class="card-body text-center">
                    <h5 class="card-title">Jane Smith</h5>
                    <p class="card-text text-muted">Lead Designer</p>
                    <p class="card-text">Creating beautiful and intuitive user experiences.</p>
                    <div class="social-links">
                      <a href="#" class="text-dark me-2"><i class="fab fa-linkedin"></i></a>
                      <a href="#" class="text-dark me-2"><i class="fab fa-twitter"></i></a>
                      <a href="#" class="text-dark"><i class="fab fa-dribbble"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://via.placeholder.com/300x300" class="card-img-top rounded-circle mx-auto mt-3" style="width: 150px; height: 150px;" alt="Team member">
                  <div class="card-body text-center">
                    <h5 class="card-title">Mike Johnson</h5>
                    <p class="card-text text-muted">Lead Developer</p>
                    <p class="card-text">Building robust and scalable solutions.</p>
                    <div class="social-links">
                      <a href="#" class="text-dark me-2"><i class="fab fa-linkedin"></i></a>
                      <a href="#" class="text-dark me-2"><i class="fab fa-github"></i></a>
                      <a href="#" class="text-dark"><i class="fab fa-stack-overflow"></i></a>
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