<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"  @click="$emit('submit')"
            >{{sureText}}</a>
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType === 3">
            <a href="javascript:;" class="btn"   @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    //弹框类型
    modalType: {
      type: String,
      default: "form",
    },
    //弹框标题
    title: String,
    //按钮类型 1确定 2 取消 3 确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config";
@import "./../assets/scss/mixin";
@import "./../assets/scss/modal";
</style>