export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}faq`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['faq', 'py-5'],
        droppable: true,
        traits: [
          // Background trait removed
        ],
        components: `
          <div class="container">
            <div class="row text-center mb-5">
              <div class="col-12">
                <h2 class="fw-bold">Frequently Asked Questions</h2>
                <p class="lead">Find answers to common questions about our services</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="accordion" id="faqAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What services do you offer?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        We offer a wide range of services including web development, mobile apps, and digital marketing solutions.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How much does it cost?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        Our pricing varies depending on your specific needs. Contact us for a custom quote.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How long does it take?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        Project timelines vary based on complexity. We'll provide a detailed timeline during consultation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
      // Removed background change event handler
    }
  });
}; 