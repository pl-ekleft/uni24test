<template>
  <nuxt-link :to="`people/${personage.key}`" v-show="checkFilter" class="personage">
    <div class="personage__photo">
      <img :src="`https://robohash.org/${personage.name}`" :alt="personage.name" />
    </div>
    <div class="personage__name">
      {{ personage.name }}
    </div>
    <div class="personage__date">
      {{ formatDate(personage.created) }}
    </div>
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'
import { formatDate } from '~/utils/common'

export default {
  data() {
    return {}
  },
  props: {
    personage: Object
  },
  computed: {
    ...mapState(['filter']),
    checkFilter() {
      const gender = this.personage.gender
      const filter = this.filter

      if(filter === 'all' || filter === 'robots' && gender === 'n/a' || filter === 'humans' && gender !== 'n/a') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="scss">
.personage {
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  border: 3px solid white;
  box-shadow: 0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 1px 3px 0 rgba(128, 144, 160, 0.2);
  background-color: white;
  &:hover {
    border-color: orangered;
  }
  &:hover & {
    &__name {
      color: orangered;
    }
  }
  &__photo {
    text-align: center;
  }
  &__name {
    padding-top: 10px;
    color: maroon;
    font-size: 18px;
    font-weight: 600;
  }
  &__date {
    color: #47494e;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>

