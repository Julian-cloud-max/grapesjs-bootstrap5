import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // 默认选项
      componentPrefix: 'bs-',
      defaultStyles: true,
    },
    ...opts
  };

  // 加载组件
  loadComponents(editor, options);
  
  // 加载块
  loadBlocks(editor, options);
}; 