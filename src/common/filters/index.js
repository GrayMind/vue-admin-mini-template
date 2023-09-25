import Vue from 'vue';
import ellipsis from './ellipsis';

const filters = {
  ellipsis,
};

Object.keys(filters).forEach((key) => {
  const filter = filters[key];
  if (typeof filter === 'function') {
    Vue.filter(key, filter);
  }
});

export default filters;
