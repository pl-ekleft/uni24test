<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="card">
        <div class="card__photo">
          <img :src="`https://robohash.org/${personage.name}`" :alt="personage.name" />
        </div>
        <div class="card__name">
          {{ personage.name }}
        </div>
        <div class="card__date">
          {{ formatDate(personage.created) }}
        </div>
        <div class="card__birth">
          Birth: {{ personage.birth_year }}
        </div>
        <div class="card__gender">
          Gender: {{ personage.gender }}
        </div>
        <div class="card__title">
          Starships
        </div>
        <div class="card__starships" v-if="starships.length">
          <span v-for="(starship, key) in starships" :key="key" >{{ starship.name }}</span>
        </div>
        <div class="card__message" v-else>
          {{loading ? 'Loading ...' : 'Information is absent'}}
        </div>
      </div>
      <div class="bar">
        <span @click="toBack" class="btn">Вернуться</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { formatDate } from '~/utils/common'

export default {
  data() {
    return {
      starships: [],
      loading: true
    }
  },
  async asyncData({ params }) {
    const personage = await axios ({
      method: 'get',
      url: `https://swapi.co/api/people/${params.id}/`,
      params: {
        format: 'json'
      }
    }).then((data) => {
      return data.data
    })
    return {
      id: params.id,
      personage: personage
    }
  },
  component: {
    formatDate
  },
  computed: {
    ...mapState(['filter'])
  },
  mounted() {
    this.getStarships()
  },
  methods: {
    formatDate,
    async getStarships() {
      const result = []
      for(let value of this.personage.starships) {
        await axios ({
          method: 'get',
          url: value,
          params: {
            format: 'json'
          }
        }).then((data) => {
          result.push(data.data)
        })
      }
      this.starships = result
      this.loading = false
    },
    toBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: auto;
  grid-template-areas:
      "photo photo"
      "name gender"
      "date birth"
      "title title"
      "starships starships";
  grid-gap: 0 20px;
  align-items: center;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 1px 3px 0 rgba(128, 144, 160, 0.2);
  background-color: #fff;
  &__photo {
    grid-area: photo;
  }
  &__name {
    grid-area: name;
    color: maroon;
    font-size: 18px;
    font-weight: 600;
  }
  &__date {
    grid-area: date;
    color: #47494e;
    font-size: 14px;
  }
  &__birth {
    grid-area: birth;
    color: #47494e;
    font-size: 14px;
    justify-self: flex-start;
  }
  &__gender {
    grid-area: gender;
    color: #47494e;
    font-size: 14px;
    justify-self: flex-start;
  }
  &__title {
    padding: 20px 0 10px;
    grid-area: title;
    color: darkblue;
    font-size: 18px;
    font-weight: 600;
  }
  &__starships {
    grid-area: starships;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
  &__message {
    grid-area: starships;
  }
}
.bar {
  display: block;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 46px;
  color: white;
  font-weight: 600;
  background-color: orangered;
  border-radius: 8px;
  box-shadow: 0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 1px 3px 0 rgba(128, 144, 160, 0.2);
  &:hover {
    cursor: pointer;
    background-color: darkred;
  }
}
.container {
  padding: 50px 30px;
  min-height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;
  }
}
</style>
