export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}progress-bar`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['progress-section', 'py-5'],
        droppable: true,
        traits: [
          {
            type: 'select',
            name: 'background',
            label: 'Background Color',
            options: [
              { id: 'bg-primary', name: 'Primary' },
              { id: 'bg-secondary', name: 'Secondary' },
              { id: 'bg-success', name: 'Success' },
              { id: 'bg-danger', name: 'Danger' },
              { id: 'bg-warning', name: 'Warning' },
              { id: 'bg-info', name: 'Info' },
              { id: 'bg-dark', name: 'Dark' }
            ],
            changeProp: true
          },
          {
            type: 'number',
            name: 'progressValue',
            label: 'Progress Value (%)',
            min: 0,
            max: 100,
            default: 50,
            changeProp: true
          },
          {
            type: 'checkbox',
            name: 'showValue',
            label: 'Show Value',
            changeProp: true
          },
          {
            type: 'checkbox',
            name: 'isStriped',
            label: 'Striped Effect',
            changeProp: true
          },
          {
            type: 'checkbox',
            name: 'isAnimated',
            label: 'Animated Effect',
            changeProp: true
          }
        ],
        components: `
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="text-center mb-4">Progress Display</h2>
                <div class="progress-container">
                  <label class="form-label">Project Completion Progress</label>
                  <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        'background': 'bg-primary',
        'progressValue': 50,
        'showValue': true,
        'isStriped': false,
        'isAnimated': false
      },
      init() {
        this.on('change:background', this.updateBackground);
        this.on('change:progressValue', this.updateProgress);
        this.on('change:showValue', this.updateShowValue);
        this.on('change:isStriped', this.updateStripes);
        this.on('change:isAnimated', this.updateAnimation);
      },
      updateBackground() {
        const progressBar = this.findProgressBar();
        const background = this.get('background');
        
        if (progressBar) {
          // Remove all background classes
          const bgClasses = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
          bgClasses.forEach(cls => progressBar.removeClass(cls));
          
          // Add new background class
          progressBar.addClass(background);
        }
      },
      updateProgress() {
        const progressBar = this.findProgressBar();
        const value = this.get('progressValue');
        
        if (progressBar) {
          progressBar.setStyle({ width: `${value}%` });
          progressBar.set({ 'aria-valuenow': value });
          
          if (this.get('showValue')) {
            progressBar.components().reset(`${value}%`);
          }
        }
      },
      updateShowValue() {
        const progressBar = this.findProgressBar();
        const showValue = this.get('showValue');
        const value = this.get('progressValue');
        
        if (progressBar) {
          if (showValue) {
            progressBar.components().reset(`${value}%`);
          } else {
            progressBar.components().reset('');
          }
        }
      },
      updateStripes() {
        const progressBar = this.findProgressBar();
        const isStriped = this.get('isStriped');
        
        if (progressBar) {
          isStriped ? progressBar.addClass('progress-bar-striped') : progressBar.removeClass('progress-bar-striped');
        }
      },
      updateAnimation() {
        const progressBar = this.findProgressBar();
        const isAnimated = this.get('isAnimated');
        
        if (progressBar) {
          isAnimated ? progressBar.addClass('progress-bar-animated') : progressBar.removeClass('progress-bar-animated');
        }
      },
      findProgressBar() {
        return this.find('.progress-bar')[0];
      }
    }
  });
}; 