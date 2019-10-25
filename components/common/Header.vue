<template>
  <header>
    <section v-if="checkIndex">
      <nav>
        Фильтр:
        <a
            href="#"
            v-for="(item, key) in navFilter"
            :key="key"
            :class="{active: filter === item.param}"
            @click.prevent="setFilter(item.param)"
        >
          {{item.title}}
        </a>
      </nav>
      <Pagination />
    </section>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from '~/components/Pagination.vue'

export default {
  name: "Header",
  components: {
    Pagination
  },
  data() {
    return {
      navFilter: [
        {
          title: 'Все',
          param: 'all'
        },
        {
          title: 'Люди',
          param: 'humans'
        } ,
        {
          title: 'Роботы',
          param: 'robots'
        }
      ]
    }
  },
  methods: {
    setFilter(param) {
      this.$store.dispatch('setFilter', param)
    }
  },
  computed: {
    ...mapState(['filter','personages']),
    checkIndex() {
      const name = this.$route.name
      return name === 'all'
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 4px;
  height: 54px;
  color: black;
  box-shadow: 0 4px 0 orangered;
  background-color: white;
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    height: 100%;
    max-width: 1098px;
    nav {
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
      a {
        margin: 0 5px;
        padding: 0 5px;
        &:hover {
          color: orangered;
        }
        &.active {
          color: white;
          text-decoration: none;
          background-color: orangered;
        }
      }
    }
  }
}
</style>
