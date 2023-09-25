import request from '@/common/utils/request';

export default (config) => request({
  ...config,
  responseType: 'blob',
}).then((res) => {
  const url = window.URL.createObjectURL(new Blob([res]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', config.filename || 'download');
  document.body.appendChild(link);
  link.click();
  return true;
});
