export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}faq-alt`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['faq-alt', 'py-5'],
        droppable: true,
        traits: [],
        components: `
          <div class="container">
            <div class="row mb-5">
              <div class="col-lg-5">
                <h2 class="fw-bold mb-4">Frequently Asked Questions</h2>
                <p class="lead mb-4">Find answers to common questions about our services and features.</p>
                <p>Can't find what you're looking for? Our support team is here to help.</p>
                <a href="#" class="btn btn-primary mt-3">Contact Support</a>
              </div>
              
              <div class="col-lg-7">
                <div class="accordion accordion-flush" id="faqAccordionAlt">
                  <!-- FAQ Item 1 -->
                  <div class="accordion-item border-0 mb-3 shadow-sm rounded overflow-hidden">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                        How do I get started with your platform?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#faqAccordionAlt">
                      <div class="accordion-body bg-white">
                        <p>Getting started is simple! Just sign up for a free account and follow our quick onboarding process. We'll guide you through the setup steps with helpful tutorials and resources to ensure you're up and running in no time.</p>
                        <p class="mb-0">For additional assistance, you can also schedule a free onboarding call with our customer success team.</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- FAQ Item 2 -->
                  <div class="accordion-item border-0 mb-3 shadow-sm rounded overflow-hidden">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#faqAccordionAlt">
                      <div class="accordion-body bg-white">
                        <p>We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payment through PayPal and bank transfers for annual subscriptions.</p>
                        <p class="mb-0">All payments are securely processed and your payment information is never stored on our servers.</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- FAQ Item 3 -->
                  <div class="accordion-item border-0 mb-3 shadow-sm rounded overflow-hidden">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Can I upgrade or downgrade my plan later?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#faqAccordionAlt">
                      <div class="accordion-body bg-white">
                        <p>Yes, you can easily upgrade or downgrade your subscription plan at any time from your account settings. When upgrading, you'll only be charged the prorated difference for the remainder of your billing cycle.</p>
                        <p class="mb-0">If you downgrade, the changes will take effect at the end of your current billing period, and you'll continue to have access to your current plan's features until then.</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- FAQ Item 4 -->
                  <div class="accordion-item border-0 mb-3 shadow-sm rounded overflow-hidden">
                    <h2 class="accordion-header" id="flush-headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Is there a free trial available?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#faqAccordionAlt">
                      <div class="accordion-body bg-white">
                        <p>Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your trial, and you'll have full access to all features of your selected plan during the trial period.</p>
                        <p class="mb-0">We'll send you a reminder before your trial ends, so you can decide if you'd like to continue with a paid subscription.</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- FAQ Item 5 -->
                  <div class="accordion-item border-0 shadow-sm rounded overflow-hidden">
                    <h2 class="accordion-header" id="flush-headingFive">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        How secure is my data on your platform?
                      </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#faqAccordionAlt">
                      <div class="accordion-body bg-white">
                        <p>Security is our top priority. We implement industry-leading security measures including:</p>
                        <ul>
                          <li>End-to-end encryption for all data</li>
                          <li>Regular security audits and penetration testing</li>
                          <li>GDPR and CCPA compliance</li>
                          <li>SOC 2 Type II certification</li>
                          <li>Multi-factor authentication</li>
                        </ul>
                        <p class="mb-0">Additionally, we maintain regular backups and disaster recovery plans to ensure your data is always safe and accessible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-5">
              <div class="col-12 text-center">
                <p class="mb-0">Need more information? Check out our <a href="#" class="text-decoration-none">complete knowledge base</a> or <a href="#" class="text-decoration-none">contact us</a>.</p>
              </div>
            </div>
          </div>
        `
      }
    }
  });
}; 