import ProgressBar from './ProgressBar';
import Timeline from './Timeline';
import Carousel from './Carousel';

export default (editor, prefix) => {
  // Load all advanced component modules
  ProgressBar(editor, prefix);
  Timeline(editor, prefix);
  Carousel(editor, prefix);
}; 