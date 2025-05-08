export default (editor, prefix = '') => {
  const domc = editor.DomComponents;

  domc.addType(`${prefix}carousel`, {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['carousel-section', 'py-5'],
        droppable: true,
        traits: [
          {
            type: 'checkbox',
            name: 'showIndicators',
            label: 'Show Indicators',
            changeProp: true
          },
          {
            type: 'checkbox',
            name: 'showControls',
            label: 'Show Controls',
            changeProp: true
          },
          {
            type: 'checkbox',
            name: 'crossfade',
            label: 'Crossfade Effect',
            changeProp: true
          },
          {
            type: 'button',
            text: 'Add Slide',
            full: true,
            command: (editor) => {
              const selected = editor.getSelected();
              if (selected) selected.view.addNewCarouselItem();
            }
          },
          {
            type: 'select',
            name: 'selectedSlide',
            label: 'Select Slide to Edit/Delete',
            options: [],
            changeProp: true
          },
          {
            type: 'button',
            text: 'Delete Selected Slide',
            full: true,
            id: 'delete-slide-button',
            name: 'deleteSlideButton',
            label: 'Delete Selected Slide',
            visible: true,
            command: function(editor) {
              const selected = editor.getSelected();
              if (selected) selected.view.deleteCarouselItem();
            }
          }
        ],
        components: `
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div id="carouselExample" class="carousel slide">
                  <!-- Indicators -->
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  
                  <!-- Carousel Content -->
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="../images/carousel-default.jpg" class="d-block w-100" alt="Slide 1">
                      <div class="carousel-caption d-block">
                        <h5>First Slide Title</h5>
                        <p>First slide description text</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="../images/carousel-default.jpg" class="d-block w-100" alt="Slide 2">
                      <div class="carousel-caption d-block">
                        <h5>Second Slide Title</h5>
                        <p>Second slide description text</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="../images/carousel-default.jpg" class="d-block w-100" alt="Slide 3">
                      <div class="carousel-caption d-block">
                        <h5>Third Slide Title</h5>
                        <p>Third slide description text</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Controls -->
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style="opacity: 0.8; background: rgba(0,0,0,0.2);">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="width: 3rem; height: 3rem;"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style="opacity: 0.8; background: rgba(0,0,0,0.2);">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="width: 3rem; height: 3rem;"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <style>
                  /* Style settings */
                  .carousel-caption {
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 20px;
                    border-radius: 5px;
                  }
                  .carousel-caption h5 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                  }
                  .carousel-caption p {
                    font-size: 1rem;
                    color: white;
                  }
                  .carousel-control-prev-icon, .carousel-control-next-icon {
                    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.8));
                  }
                </style>
              </div>
            </div>
          </div>
        `,
        'showIndicators': true,
        'showControls': true,
        'crossfade': false,
        'selectedSlide': '',
        script: function() {
          var carousel = this.querySelector('.carousel');
          if (!carousel) return;
          
          // Try to initialize Bootstrap carousel
          if (typeof bootstrap !== 'undefined') {
            try {
              var bsCarousel = new bootstrap.Carousel(carousel);
            } catch(e) {}
          }
        }
      },
      
      init() {
        const events = ['showIndicators', 'showControls', 'crossfade'];
        events.forEach(prop => this.on(`change:${prop}`, this[`update${prop.charAt(0).toUpperCase() + prop.slice(1)}`]));
        
        this.once('change:components', this.initializeProperties);
        this.on('change:components', this.updateSlideOptions);
        this.on('change:selectedSlide', this.updateSelectedSlide);
        
        editor.on('load', () => setTimeout(() => this.updateAllProperties(), 300));
      },
      
      // 初始化属性并触发更新
      initializeProperties() {
        this.updateAllProperties();
        setTimeout(() => this.triggerScriptUpdate(), 100);
      },
      
      // 触发脚本更新
      triggerScriptUpdate() {
        this.trigger('change:script');
      },
      
      // 更新所有属性
      updateAllProperties() {
        this.updateShowIndicators();
        this.updateShowControls();
        this.updateCrossfade();
        this.updateSlideOptions();
      },
      
      // 确保按钮可见性
      ensureTraitButtonsVisible() {
        const traits = this.get('traits');
        
        // 查找所有按钮类型traits
        const allButtons = traits.where({ type: 'button' });
        
        // 查找删除按钮，尝试几种可能的匹配方式
        let deleteButton = null;
        
        // 1. 尝试通过按钮的属性查找删除按钮
        for (let i = 0; i < allButtons.length; i++) {
          const button = allButtons[i];
          const buttonProps = button.attributes;
          
          if (buttonProps.command && typeof buttonProps.command === 'function') {
            const buttonText = buttonProps.text || buttonProps.label || '';
            
            if (buttonText.includes('delete')) {
              deleteButton = button;
              break;
            }
          }
        }
        
        // 2. 如果上面的方法找不到，尝试根据索引（假设删除按钮是第二个按钮）
        if (!deleteButton && allButtons.length >= 2) {
          deleteButton = allButtons[1]; // 第二个按钮通常是删除按钮
        }
        
        // 如果找到了删除按钮，触发change事件
        if (deleteButton) {
          deleteButton.trigger('change');
          
          // 尝试直接设置按钮可见
          try {
            const view = this.view;
            if (view && view.onRender) {
              setTimeout(() => view.onRender(), 0);
            }
          } catch (e) {}
        } else {
          // 最后尝试：触发所有按钮的change事件
          allButtons.forEach((btn) => {
            btn.trigger('change');
          });
        }
      },
      
      // 更新指示器显示
      updateShowIndicators() {
        const indicators = this.findIndicators();
        if (indicators) {
          indicators.setStyle({ display: this.get('showIndicators') ? 'flex' : 'none' });
        }
      },
      
      // 更新控制按钮显示
      updateShowControls() {
        const prevButton = this.findPrevControl();
        const nextButton = this.findNextControl();
        const showControls = this.get('showControls');
        
        if (prevButton) prevButton.setStyle({ display: showControls ? 'flex' : 'none' });
        if (nextButton) nextButton.setStyle({ display: showControls ? 'flex' : 'none' });
      },
      
      // 更新淡入淡出效果
      updateCrossfade() {
        const carousel = this.findCarousel();
        if (carousel) {
          this.get('crossfade') ? carousel.addClass('carousel-fade') : carousel.removeClass('carousel-fade');
        }
      },
      
      // 更新幻灯片选项
      updateSlideOptions() {
        const carouselInner = this.findCarouselInner();
        if (!carouselInner) return;
        
        const slides = carouselInner.components();
        const options = [];
        
        slides.forEach((slide, index) => {
          let title = 'Slide ' + (index + 1);
          const caption = slide.find('.carousel-caption h5');
          if (caption && caption.length > 0) {
            const captionText = caption[0].get('content');
            if (captionText) title = captionText;
          }
          
          options.push({ id: index.toString(), name: title });
        });
        
        const traits = this.get('traits');
        const slideSelectTrait = traits.where({ name: 'selectedSlide' })[0];
        
        if (slideSelectTrait) {
          slideSelectTrait.set('options', options);
          
          const currentValue = this.get('selectedSlide');
          const validOptions = options.map(opt => opt.id.toString());
          if (currentValue && !validOptions.includes(currentValue.toString())) {
            this.set('selectedSlide', '');
          }
        }
        
        this.ensureTraitButtonsVisible();
      },
      
      // 当选中幻灯片变化时更新UI
      updateSelectedSlide() {
        // 检查是否有有效的幻灯片被选中
        const selectedSlide = this.get('selectedSlide');
        const hasSelection = selectedSlide !== '' && selectedSlide !== undefined && selectedSlide !== null;
        
        // 获取traits集合
        const traits = this.get('traits');
        
        // 查找所有按钮类型traits
        const allButtons = traits.where({ type: 'button' });
        
        // 尝试查找删除按钮 (假设删除按钮是第二个按钮trait)
        let deleteButton = null;
        if (allButtons.length >= 2) {
          deleteButton = allButtons[1];
        }
        
        // 如果找到了删除按钮，尝试强制设置其状态
        if (deleteButton && hasSelection) {
          // 设置按钮可见
          if (typeof deleteButton.set === 'function') {
            try {
              deleteButton.set('visible', true);
              deleteButton.set('hidden', false);
              deleteButton.trigger('change');
            } catch (e) {}
          }
        }
        
        // 确保按钮可见
        this.ensureTraitButtonsVisible();
      },
      
      // 确保有活动幻灯片
      ensureActiveSlide() {
        const carouselInner = this.findCarouselInner();
        if (!carouselInner) return;
        
        const items = carouselInner.components().models;
        let hasActive = false;
        
        items.forEach(item => {
          const classes = item.get('classes') || [];
          if (classes.includes('active')) hasActive = true;
        });
        
        if (!hasActive && items.length > 0) {
          const firstItem = items[0];
          const classes = firstItem.get('classes') || [];
          firstItem.set('classes', [...classes, 'active']);
        }
      },
      
      // 查找元素辅助方法
      findCarousel() { return this.find('.carousel')[0] || null; },
      findCarouselInner() { return this.find('.carousel-inner')[0] || null; },
      findIndicators() { return this.find('.carousel-indicators')[0] || null; },
      findPrevControl() { return this.find('.carousel-control-prev')[0] || null; },
      findNextControl() { return this.find('.carousel-control-next')[0] || null; }
    },
    
    view: {
      // 初始化视图
      init() {
        this.listenTo(this.model, 'change:traits', this.updateSlideOptions);
        setTimeout(() => {
          this.model.updateAllProperties();
          this.model.ensureTraitButtonsVisible();
        }, 300);
      },
      
      // 渲染后处理
      onRender() {
        const model = this.model;
        model.updateSlideOptions();
      },
      
      // 添加新幻灯片
      addNewCarouselItem() {
        const model = this.model;
        const carousel = model.findCarousel();
        
        if (!carousel) {
          console.warn('Cannot find carousel element, unable to add slide');
          return;
        }
        
        const carouselInner = model.findCarouselInner();
        if (!carouselInner) {
          console.warn('Cannot find carousel inner content area, unable to add slide');
          return;
        }
        
        const indicators = model.findIndicators();
        const items = carouselInner.components();
        const itemCount = items.length;
        
        // Add new carousel item
        carouselInner.append({
          tagName: 'div',
          classes: ['carousel-item'],
          components: [
            {
              tagName: 'img',
              classes: ['d-block', 'w-100'],
              attributes: {
                src: '../images/carousel-default.jpg',
                alt: `Slide ${itemCount + 1}`
              }
            },
            {
              tagName: 'div',
              classes: ['carousel-caption', 'd-block'],
              components: [
                {
                  tagName: 'h5',
                  content: `New Slide Title ${itemCount + 1}`
                },
                {
                  tagName: 'p',
                  content: `New slide description text ${itemCount + 1}`
                }
              ]
            }
          ]
        });
        
        // Add indicator
        if (indicators) {
          indicators.append({
            tagName: 'button',
            attributes: {
              type: 'button',
              'data-bs-target': '#carouselExample',
              'data-bs-slide-to': itemCount,
              'aria-label': `Slide ${itemCount + 1}`
            }
          });
        }
        
        // Update properties
        model.updateAllProperties();
        model.triggerScriptUpdate();
        
        // Select newly added slide
        setTimeout(() => {
          model.updateSlideOptions();
          model.set('selectedSlide', itemCount.toString());
        }, 100);
        
        alert(`Successfully added slide ${itemCount + 1}!\nYou can select and delete slides in the traits panel.`);
      },
      
      // Delete selected slide
      deleteCarouselItem() {
        const model = this.model;
        const carousel = model.findCarousel();
        const selectedSlide = model.get('selectedSlide');
        
        if (!carousel || selectedSlide === '') {
          alert('Please select a slide to delete from the "Select Slide to Edit/Delete" dropdown menu first!');
          return;
        }
        
        const slideIndex = parseInt(selectedSlide);
        if (isNaN(slideIndex)) {
          alert('Invalid slide index, please select again');
          return;
        }
        
        const carouselInner = model.findCarouselInner();
        const indicators = model.findIndicators();
        
        if (!carouselInner) {
          alert('Cannot find carousel content area, unable to delete slide');
          return;
        }
        
        const slides = carouselInner.components();
        
        if (slides.length <= 1) {
          alert('Cannot delete: Must keep at least one slide');
          return;
        }
        
        if (slideIndex < 0 || slideIndex >= slides.length) {
          alert(`Invalid slide index: ${slideIndex}`);
          return;
        }
        
        // Get title of slide to be deleted
        const slide = slides.at(slideIndex);
        let slideTitle = 'Slide ' + (slideIndex + 1);
        const caption = slide.find('.carousel-caption h5');
        if (caption && caption.length > 0) {
          const captionText = caption[0].get('content');
          if (captionText) slideTitle = captionText;
        }
        
        if (!confirm(`Are you sure you want to delete "${slideTitle}"? This action cannot be undone.`)) {
          return;
        }
        
        // Check if active slide
        const classes = slide.get('classes') || [];
        const wasActive = classes.includes('active');
        
        // Delete slide
        slides.remove(slide);
        
        // Delete indicator and update indices
        if (indicators) {
          const indicatorButtons = indicators.components();
          
          if (indicatorButtons.length > slideIndex) {
            indicatorButtons.remove(indicatorButtons.at(slideIndex));
          }
          
          indicatorButtons.each((indicator, idx) => {
            if (idx >= slideIndex) {
              indicator.set('attributes', {
                ...indicator.get('attributes'),
                'data-bs-slide-to': idx,
                'aria-label': `Slide ${idx + 1}`
              });
            }
          });
        }
        
        // Activate new slide
        if (wasActive && slides.length > 0) {
          const newActiveIndex = slideIndex < slides.length ? slideIndex : 0;
          const newActiveSlide = slides.at(newActiveIndex);
          
          if (newActiveSlide) {
            const newClasses = newActiveSlide.get('classes') || [];
            newActiveSlide.set('classes', [...newClasses, 'active']);
            
            // Update indicator
            if (indicators && indicators.components().length > newActiveIndex) {
              const newActiveIndicator = indicators.components().at(newActiveIndex);
              newActiveIndicator.set('attributes', {
                ...newActiveIndicator.get('attributes'),
                'class': 'active',
                'aria-current': 'true'
              });
            }
          }
        }
        
        // Update UI
        model.updateAllProperties();
        model.triggerScriptUpdate();
        
        // Clear selection and update options
        model.set('selectedSlide', '');
        setTimeout(() => model.updateSlideOptions(), 100);
        
        alert(`Successfully deleted slide "${slideTitle}"!`);
      },
      
      updateSlideOptions() {
        this.model.updateSlideOptions();
      }
    }
  });
}; 