import md5 from 'blueimp-md5';

/**
 * 生成UUID
 * @returns {String}
 */
export function generateUUID() {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '';
  return s.join('');
}

/**
 * 格式化字符串
 * @returns {String}
 */
export function stringFormat(...params) {
  if (arguments.length === 0) {
    return null;
  }
  let str = params[0];
  for (let i = 1; i < arguments.length; i += 1) {
    const re = new RegExp(`\\{${i - 1}\\}`, 'gm');
    str = str.replace(re, params[i]);
  }
  return str;
}

/**
 * 字符串MD5
 * @returns {String}
 */
export function MD5(data) {
  return md5(data);
}

// 动态加载 script 文件
export function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) { // IE
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else { // Others
      script.onload = function () {
        resolve();
      };
    }
    script.onerror = function () {
      reject(`script: ${url} 加载失败`);
    };
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}
