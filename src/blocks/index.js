import contentBlocks from './content';
import advancedBlocks from './advanced';

export default (editor, options = {}) => {
  const bm = editor.BlockManager;
  const prefix = options.componentPrefix;

  // Load all block modules
  contentBlocks(bm, prefix);
  advancedBlocks(bm, prefix);

}; 