import store from '@/common/store';

function checkPermission(el, binding) {
  const { value } = binding;
  const permissions = store.getters && store.getters.permissions;

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionCodes = value;

      const hasPermission = permissions.some((p) => permissionCodes.includes(p.permissionCode));

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error('need permissions! Like v-permission="[\'staff-list\',\'staff-add\']"');
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
};
