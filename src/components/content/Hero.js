export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}hero`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['hero', 'py-5'],
        droppable: true,
        traits: [
          // Background trait removed
        ],
        components: `
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <h1 class="display-4 fw-bold">Welcome to Our Site</h1>
                <p class="lead mb-4">A professional website template for your business</p>
                <button class="btn btn-primary btn-lg">Get Started</button>
              </div>
              <div class="col-lg-6">
                <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Hero image">
              </div>
            </div>
          </div>
        `
      }
      // Removed background change event handler
    }
  });
}; 