<template>
  <div class="btn-top">
    <button @click="scrollToTop">回到顶部</button>
  </div>
</template>
<script>
export default {
  name: "Totop",
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      let timer = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20);
        } else {
          window.clearInterval(timer);
        }
      }, 16)
    }
  }
};
</script>
<style>
.btn-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 30px;
}
button {
  background: #e96900;
  border: 0 none;
  outline: none;
  color: #fff;
  cursor: pointer;
}
</style>


