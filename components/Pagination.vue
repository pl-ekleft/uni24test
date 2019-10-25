<template>
  <nav>
    <div class="pagination">
      <nuxt-link :to="`/${showNumbers(prev)}`" v-show="!!prev" class="pagination__page" @click="goPrev">Prev</nuxt-link>
      <span class="pagination__current-page">{{currentPage}}</span>
      <nuxt-link :to="`/${showNumbers(next)}`" v-show="!!next" class="pagination__page" @click="goNext">Next</nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import { showNumbers } from '~/utils/common'

export default {
  name: "Pagination",
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      currentPage: state  => state.currentPage,
      next: state  => state.personages.next,
      prev: state  => state.personages.previous,
    })
  },
  methods: {
    showNumbers,
    goPrev() {
      const link = this.prev
      if (!!link) {
        this.getPage(link)
      }
    },
    goNext() {
      const link = this.next
      if (!!link) {
        this.getPage(link)
      }
    },
    getPage(link) {
      this.$store.dispatch('setCurrentPage', this.showNumbers(link))
      this.$store.dispatch('setPersonages', { url:link })
    },
  }
}
</script>

<style lang="scss">
.pagination {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style:none;
  a, span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 15px;
    min-width: 30px;
    min-height: 30px;
    padding: 0 15px;
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 1px 3px 0 rgba(128, 144, 160, 0.2);
    &:first-child {
      margin-left: 0;
    }
  }
  &__page {
    color: darkslateblue;
    background-color: white;
    border-bottom: 2px solid orangered;
    transition: all 0.3s;
    &:hover {
      color: white;
      background-color: orangered;
      cursor: pointer;
    }
    &:active {
      border-bottom: 0;
    }
  }
  &__current-page {
    color: white;
    border-bottom: 2px solid mediumslateblue;
    background-color: mediumslateblue;
  }
}
</style>
