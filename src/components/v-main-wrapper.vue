<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'v-main-wrapper',
};
</script>

<style scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.v-cart {
  margin: 0 auto;
}
</style>
