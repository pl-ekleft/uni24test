<template>
  <div class="container">
    <div class="container__wrapper">
      <Personage v-for="(personage, key) in personages.results" :key="key" :personage="{key, ...personage}"></Personage>
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
    this.$store.dispatch('setPersonages')
  },
  computed: {
    ...mapState(['personages'])
  }
}
</script>

<style lang="scss">
.container {
  padding: 50px 30px;
  min-height: calc(100vh - 50px);
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

