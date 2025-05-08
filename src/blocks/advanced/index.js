import ProgressBar from './ProgressBar';
import Timeline from './Timeline';
import Carousel from './Carousel';

export default (bm, prefix) => {
  // Load all advanced block modules
  ProgressBar(bm, prefix);
  Timeline(bm, prefix);
  Carousel(bm, prefix);
}; 