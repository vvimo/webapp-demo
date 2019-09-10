import FastClick from 'fastclick';

// 兼容毒瘤ios的300ms延迟问题
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      (FastClick as any).attach(document.body);
    },
    false,
  );
}
