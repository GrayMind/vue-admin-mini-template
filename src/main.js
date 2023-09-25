import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/common/styles/index.scss'; // global css
import '@/common/filters';
import '@/common/directive';

import AppContentContainer from '@/common/layout/components/AppContentContainer';
import AppGroupContainer from '@/common/layout/components/AppGroupContainer';
import AppGroupView from '@/common/layout/components/AppGroupView';
import DescriptionList from '@/common/components/Description/DescriptionList';
import DescriptionItem from '@/common/components/Description/DescriptionItem';

import App from './App';
import store from './common/store';
import router from './common/router';

import '@/common/icons'; // icon
import '@/permission'; // permission control

require('intersection-observer');

Vue.config.devtools = true;

Vue.use(ElementUI);
Vue.component('DescriptionList', DescriptionList);
Vue.component('DescriptionItem', DescriptionItem);
Vue.component('AppContentContainer', AppContentContainer);
Vue.component('AppGroupContainer', AppGroupContainer);
Vue.component('AppGroupView', AppGroupView);

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
