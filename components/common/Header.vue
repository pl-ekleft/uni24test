<template>
  <header>
    <section>
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
    </section>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
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
  created() {
    // console.log(this.filter, this.$store.getters.getFilter)
  },
  methods: {
    setFilter(param) {
      this.$store.dispatch('setFilter', param)
    }
  },
  computed: {
    ...mapState(['filter'])
  }
}
</script>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: 0;
    left: 0;
    height: 50px;
    color: black;
    box-shadow: 0 4px 0 orangered;
    background-color: white;
    section {
      display: flex;
      justify-content: center;
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
