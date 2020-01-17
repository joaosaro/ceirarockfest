<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <router-link class="main-nav__link" to="/">
        <img src="@/assets/logo.png" height="100" width="100" alt="" />
      </router-link>
      <router-link class="main-nav__link" to="/">Link A</router-link>
      <router-link class="main-nav__link" to="/">Link B</router-link>
      <router-link class="main-nav__link" to="/">Link C</router-link>
      <router-link class="main-nav__link" to="/">Link D</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style scoped lang="scss">
.main-nav__list {
  display: flex;
  align-items: center;
}

.main-nav__link:not(:first-child) {
  margin-left: $spacing-l;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: white;
  }
}
</style>
