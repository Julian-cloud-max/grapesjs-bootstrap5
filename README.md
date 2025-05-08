# GrapesJS Bootstrap Plugin

A comprehensive plugin for GrapesJS that integrates Bootstrap 5 components and functionality to create responsive websites with minimal effort.

## Features

- Bootstrap 5 components integration
- Responsive grid system
- Pre-built content blocks and templates
- Custom styling options
- Bootstrap-specific traits and commands
- Interactive advanced components

## Installation

```bash
npm install grapesjs-bootstrap
```

## Usage

```javascript
import grapesjs from 'grapesjs';
import grapesjsBootstrap from 'grapesjs-bootstrap';

const editor = grapesjs.init({
  container: '#gjs',
  plugins: [grapesjsBootstrap],
  pluginsOpts: {
    grapesjsBootstrap: {
      // Options
      componentPrefix: 'bs-', // Optional prefix for component classes
    }
  }
});
```

## Available Components

Our plugin currently offers the following pre-built components:

### Content Blocks

1. **Hero Section**
   - Responsive header section with compelling headline
   - Image and text content areas
   - Call-to-action button

2. **Alternative Hero**
   - Centered text layout with dual call-to-action buttons
   - Feature highlights with icons
   - Clean, modern design

3. **Features Section**
   - Icon-based feature highlights
   - Customizable content for each feature
   - Responsive column layout

4. **Alternative Features**
   - Horizontal icon and text layout
   - Two-column responsive grid
   - Call-to-action button
   - Modern left-aligned design

5. **Products Grid**
   - Responsive product cards
   - Customizable product information
   - Call-to-action buttons

6. **Enhanced Products Grid**
   - Four-column responsive layout
   - Product ratings and review counts
   - Sale and new item badges
   - Dual action buttons for details and purchase
   - Flexible product information display

7. **Team Section**
   - Team member profiles with images
   - Customizable member information
   - Social media integration

8. **Leadership Team**
   - Horizontal card layout with side-by-side images
   - Detailed professional descriptions
   - Role-based categorization
   - Social media and contact links
   - Call-to-action button

9. **Pricing Tables**
   - Multi-tier pricing options
   - Feature list for each tier
   - Highlighted recommended plan
   - Call-to-action buttons

10. **Modern Pricing Table**
    - Billing toggle (monthly/annual)
    - Visual feature comparison with icons
    - Detailed plan descriptions
    - Full-width call-to-action buttons
    - Hover effects and clean design

11. **Testimonials**
    - Client feedback cards
    - Customizable profile pictures and content
    - Clean, professional layout

12. **Enhanced Testimonials**
    - Star ratings display
    - Client and company logos
    - Detailed testimonial content
    - Social proof section with partner logos
    - Modern card design with shadows

13. **FAQ Section**
    - Accordion-style question and answer format
    - Expandable sections
    - Easy content customization

14. **Enhanced FAQ**
    - Two-column layout with left-side introduction
    - Contact support option
    - Styled accordion items with shadow effects
    - Rich content formatting with lists and paragraphs
    - Additional resources links

### Advanced Components

1. **Progress Bar**
   - Interactive progress indicator
   - Customizable colors and styles
   - Configurable progress percentage
   - Optional text display
   - Striped and animated variations

2. **Timeline**
   - Interactive timeline for showcasing chronological events
   - Vertical and horizontal layout options
   - Multiple alignment styles (alternate, left, right)
   - Customizable colors and icons
   - Smooth reveal animations
   - Add/edit/delete timeline events
   - Responsive design for all devices

3. **Carousel**
   - Interactive Bootstrap 5 image carousel
   - Add and customize multiple image slides
   - Caption editing for each slide
   - Configurable options: autoplay, indicators, controls
   - Custom time interval settings
   - Fade transition effects
   - Responsive on all devices
   - User-friendly image management

### Component Customization

Each component supports various customization options through the GrapesJS Traits panel:

- Background colors and styles
- Content editing
- Spacing and layout modifications
- Bootstrap-specific classes and utilities

## Development

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run start`

### Project Structure
```
/src
  /components      # Bootstrap component definitions
    /content       # Content-focused components
    /advanced      # Advanced interactive components
  /blocks          # Pre-built blocks
    /content       # Content block definitions
    /advanced      # Advanced block definitions
  index.js         # Plugin entry point
```

### Building
```bash
npm run build
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `componentPrefix` | String | 'bs-' | Prefix for component classes |
| `defaultStyles` | Boolean | true | Whether to load default Bootstrap styles |

## Future Extensible Blocks

We plan to expand the plugin with the following component categories:

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Support

For support and questions, please open an issue in the repository.
"# grapesjs-bootstrap5" 
