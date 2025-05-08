import contentComponents from './content';
import advancedComponents from './advanced';

export default (editor, options = {}) => {
  const prefix = options.componentPrefix || '';

  // 加载所有组件模块
  contentComponents(editor, prefix);
  advancedComponents(editor, prefix);

}; 