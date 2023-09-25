export default function ellipsis(value, length = 30) {
  const val = String(value);
  if (val && val.length > length) {
    let str = val.substr(0, length);
    str += '...';
    return str;
  }
  return val;
}
