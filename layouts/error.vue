<template>
  <section>
    <div>
      <h1>Error {{ statusCode }}</h1>
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "error",
    layout: 'default',
    props: {
      error: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {}
    },
    head() {
      return {
        title: this.message
      }
    },
    computed: {
      statusCode() {
        return (this.error && this.error.statusCode) || 500
      },
      message() {
        return this.error.message || 'Такой страницы нет'
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    min-height: calc(100vh - 54px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
