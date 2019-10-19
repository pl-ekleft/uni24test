<template>
  <div class="container">
    <div class="container__wrapper">
      <Personage v-for="(people, key) in peoples" :key="key" :personage="{key, ...people}"></Personage>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Personage from '~/components/Personage.vue'

export default {
  components: {
    Personage
  },
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('setPeoples')
  },
  computed: {
    ...mapState(['peoples'])
  }
}
</script>

<style lang="scss">
.container {
  padding: 50px 30px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    grid-gap: 30px;
  }
}
</style>

