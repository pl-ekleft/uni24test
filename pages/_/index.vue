<template>
  <div class="container">
    <transition-group
        tag="div"
        name="personage-"
        class="container__wrapper"
    >
      <Personage v-for="(personage, key) in personages.results" :key="`tg-${key}`" :personage="{key, ...personage}" />
    </transition-group>
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
  asyncData({ params }) {
    return {
      id: params.pathMatch || 1
    }
  },
  created() {
    this.$store.dispatch('setCurrentPage', this.id)
    this.$store.dispatch('setPersonages', {page:this.id})
  },
  computed: {
    ...mapState(['personages','count'])
  }
}
</script>

<style lang="scss">
.container {
  padding: 50px 30px;
  min-height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    grid-gap: 30px;
  }
}
</style>

