export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}timeline-item`, {
    model: {
      defaults: {
        tagName: 'div',
        classes: ['timeline-item'],
        droppable: false,
        traits: [
          {
            type: 'date',
            name: 'date',
            label: 'Date',
            changeProp: true
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            changeProp: true
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            changeProp: true
          },
          {
            type: 'select',
            name: 'iconClass',
            label: 'Icon',
            options: [
              { id: 'fa-star', name: 'Star' },
              { id: 'fa-flag', name: 'Flag' },
              { id: 'fa-calendar', name: 'Calendar' },
              { id: 'fa-trophy', name: 'Trophy' },
              { id: 'fa-lightbulb', name: 'Lightbulb' },
              { id: 'fa-check', name: 'Check' },
              { id: 'fa-info-circle', name: 'Info' }
            ],
            changeProp: true
          }
        ],
        components: `
          <div class="timeline-line-top"></div>
          <div class="timeline-icon">
            <div class="icon-wrapper">
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="timeline-line-bottom"></div>
          <div class="timeline-content">
            <span class="timeline-date">January 1, 2024</span>
            <h3 class="timeline-title">Timeline Event Title</h3>
            <p class="timeline-description">This is a detailed description of this timeline event. You can add more information here.</p>
          </div>
        `,
        'date': 'January 1, 2024',
        'title': 'Timeline Event Title',
        'description': 'This is a detailed description of this timeline event. You can add more information here.',
        'iconClass': 'fa-star'
      },
      init() {
        this.on('change:date', this.updateDate);
        this.on('change:title', this.updateTitle);
        this.on('change:description', this.updateDescription);
        this.on('change:iconClass', this.updateIcon);
        
        // Initialize and show/hide connection lines
        setTimeout(() => this.updateLines(), 100);
      },
      updateDate() {
        const dateEl = this.find('.timeline-date')[0];
        if (dateEl) {
          dateEl.components().reset(this.get('date'));
        }
      },
      updateTitle() {
        const titleEl = this.find('.timeline-title')[0];
        if (titleEl) {
          titleEl.components().reset(this.get('title'));
        }
      },
      updateDescription() {
        const descEl = this.find('.timeline-description')[0];
        if (descEl) {
          descEl.components().reset(this.get('description'));
        }
      },
      updateIcon() {
        const iconEl = this.find('.timeline-icon i')[0];
        if (iconEl) {
          // Remove all icon classes
          const iconClasses = ['fa-star', 'fa-flag', 'fa-calendar', 'fa-trophy', 'fa-lightbulb', 'fa-check', 'fa-info-circle'];
          iconClasses.forEach(cls => iconEl.removeClass(cls));
          
          // Add new icon class
          iconEl.addClass(this.get('iconClass'));
        }
      },
      updateLines() {
        const parent = this.parent();
        const siblings = parent ? parent.components() : null;
        const index = siblings ? siblings.indexOf(this) : -1;
        
        if (siblings && index !== -1) {
          const isFirst = index === 0;
          const isLast = index === siblings.length - 1;
          
          // Get top and bottom line elements
          const topLine = this.find('.timeline-line-top')[0];
          const bottomLine = this.find('.timeline-line-bottom')[0];
          
          // First node doesn't show top line
          if (topLine) {
            if (isFirst) {
              topLine.addClass('hidden');
            } else {
              topLine.removeClass('hidden');
            }
          }
          
          // Last node doesn't show bottom line
          if (bottomLine) {
            if (isLast) {
              bottomLine.addClass('hidden');
            } else {
              bottomLine.removeClass('hidden');
            }
          }
        }
      }
    }
  });

  domc.addType(`${prefix}timeline`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['timeline-section', 'py-5'],
        droppable: true,
        traits: [
          {
            type: 'select',
            name: 'alignment',
            label: 'Alignment',
            options: [
              { id: 'alternate', name: 'Alternate' },
              { id: 'left', name: 'Left' },
              { id: 'right', name: 'Right' }
            ],
            changeProp: true
          },
          {
            type: 'color',
            name: 'lineColor',
            label: 'Line Color',
            changeProp: true
          },
          {
            type: 'button',
            text: 'Add Timeline Event',
            full: true,
            command: (editor) => {
              const selected = editor.getSelected();
              if (selected) {
                editor.runCommand('add-timeline-item', { prefix });
              }
            }
          }
        ],
        components: `
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="timeline-heading text-center mb-5">Timeline</h2>
                <div class="timeline-container vertical alternate">
                  <div class="timeline-item" data-gjs-type="${prefix}timeline-item"></div>
                  <div class="timeline-item" data-gjs-type="${prefix}timeline-item"></div>
                  <div class="timeline-item" data-gjs-type="${prefix}timeline-item"></div>
                </div>
              </div>
            </div>
          </div>
        `,
        'alignment': 'alternate',
        'lineColor': '#3498db'
      },
      init() {
        this.on('change:alignment', this.updateAlignment);
        this.on('change:lineColor', this.updateLineStyle);
        
        // Add custom commands
        const editor = this.em.get('Editor');
        const cmdm = editor.Commands;
        
        // Add timeline item command
        if (!cmdm.has('add-timeline-item')) {
          cmdm.add('add-timeline-item', {
            run(editor, sender, options = {}) {
              const selected = editor.getSelected();
              const timelineContainer = selected.find('.timeline-container')[0];
              
              if (timelineContainer) {
                const timelineItems = timelineContainer.components();
                const newItem = {
                  type: `${options.prefix}timeline-item`,
                  date: `${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
                  title: 'New Timeline Event',
                  description: 'Add a description for this timeline event.',
                  iconClass: 'fa-star'
                };
                
                timelineItems.add(newItem);
                
                // Update line display status for all timeline items
                setTimeout(() => {
                  timelineItems.each(item => {
                    if (item.get('type') === `${options.prefix}timeline-item` && typeof item.updateLines === 'function') {
                      item.updateLines();
                    }
                  });
                }, 100);
              }
            }
          });
        }
      },
      updateAlignment() {
        const container = this.find('.timeline-container')[0];
        if (container) {
          container.removeClass('alternate left right');
          container.addClass(this.get('alignment'));
        }
      },
      updateLineStyle() {
        const lineColor = this.get('lineColor');
        const container = this.find('.timeline-container')[0];
        
        if (container) {
          // Add custom styles to container
          const styleObj = {
            '--timeline-line-color': lineColor
          };
          
          // Set custom styles
          container.setStyle(styleObj);
          
          // Update icon background color for consistency
          this.find('.icon-wrapper').forEach(icon => {
            icon.setStyle({
              'background-color': lineColor
            });
          });
        }
      }
    }
  });

  // Add necessary styles
  const css = `
    .timeline-section {
      position: relative;
    }
    
    .timeline-container {
      position: relative;
      margin: 0 auto;
      max-width: 1200px;
      /* Add CSS variable for JS dynamic changes */
      --timeline-line-color: #3498db;
    }
    
    /* Remove main axis line style, use connection lines between nodes instead */
    
    /* Timeline item styles */
    .timeline-container.vertical .timeline-item {
      position: relative;
      margin-bottom: 40px;
      width: 100%;
      display: flex;
      min-height: 100px; /* Ensure each node has enough height */
      align-items: center; /* Center content vertically */
    }
    
    /* Last timeline item has no bottom margin */
    .timeline-container.vertical .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .timeline-container.vertical.alternate .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }
    
    .timeline-container.vertical.left .timeline-item {
      flex-direction: row;
      justify-content: flex-start;
    }
    
    .timeline-container.vertical.right .timeline-item {
      flex-direction: row-reverse;
      justify-content: flex-start;
    }
    
    /* Connection line styles */
    .timeline-line-top,
    .timeline-line-bottom {
      position: absolute;
      width: 4px;
      background-color: var(--timeline-line-color);
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    
    .timeline-line-top {
      bottom: 50%;
      height: calc(20px + 50%); /* Extend upwards */
    }
    
    .timeline-line-bottom {
      top: 50%;
      height: calc(20px + 50%); /* Extend downwards */
    }
    
    .timeline-line-top.hidden,
    .timeline-line-bottom.hidden {
      display: none;
    }
    
    /* Connection line position for left and right alignment */
    .timeline-container.vertical.left .timeline-line-top,
    .timeline-container.vertical.left .timeline-line-bottom {
      left: 120px;
    }
    
    .timeline-container.vertical.right .timeline-line-top,
    .timeline-container.vertical.right .timeline-line-bottom {
      left: calc(100% - 120px);
    }
    
    /* Icon styles - Ensure all icons are centered in card */
    .timeline-container.vertical .timeline-icon {
      position: absolute;
      left: 50%;
      top: 50%; /* Center vertically */
      transform: translate(-50%, -50%); /* Center horizontally and vertically */
      z-index: 2;
    }
    
    .timeline-container.vertical.left .timeline-icon {
      left: 120px;
    }
    
    .timeline-container.vertical.right .timeline-icon {
      left: calc(100% - 120px);
    }
    
    .timeline-container .icon-wrapper {
      width: 50px;
      height: 50px;
      background-color: var(--timeline-line-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    
    /* Content styles */
    .timeline-container .timeline-content {
      width: calc(50% - 30px);
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      position: relative;
    }
    
    .timeline-container.vertical.alternate .timeline-content {
      margin-left: auto;
    }
    
    .timeline-container.vertical.alternate .timeline-item:nth-child(even) .timeline-content {
      margin-left: 0;
      margin-right: auto;
    }
    
    .timeline-container.vertical.left .timeline-content {
      margin-left: 150px;
      width: calc(100% - 180px);
    }
    
    .timeline-container.vertical.right .timeline-content {
      margin-right: 150px;
      width: calc(100% - 180px);
    }
    
    /* Text content styles */
    .timeline-container .timeline-date {
      display: block;
      font-size: 0.85rem;
      color: #6c757d;
      margin-bottom: 8px;
    }
    
    .timeline-container .timeline-title {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #343a40;
    }
    
    .timeline-container .timeline-description {
      color: #6c757d;
      line-height: 1.6;
    }
  `;
  
  // Add CSS to editor
  const cssComp = editor.StyleManager.addBuiltIn('timeline-styles', {
    styleAdder(target) {
      target.addStyle(css);
    }
  });

  cssComp.styleAdder(editor.getModel());
}; 