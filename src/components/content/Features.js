export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}features`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['features', 'py-5', 'bg-light'],
        droppable: true,
        traits: [
          // Columns trait removed
        ],
        components: `
          <div class="container">
            <div class="row text-center g-4">
              <div class="col-md-4">
                <div class="card h-100 border-0 bg-transparent">
                  <div class="card-body">
                    <i class="fas fa-layer-group fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Feature 1</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0 bg-transparent">
                  <div class="card-body">
                    <i class="fas fa-code fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Feature 2</h5>
                    <p class="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0 bg-transparent">
                  <div class="card-body">
                    <i class="fas fa-rocket fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">Feature 3</h5>
                    <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation.</p>
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