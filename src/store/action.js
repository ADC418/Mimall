/**
 * 商城Vuex-actions
 */
export default {
  saveUserName(context, username) {
    context.commit('saveUserName', username);
  },
  saveCartCount({ commit }, count) {
    commit('saveCartCount', count);
  }
}
