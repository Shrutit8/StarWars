<style>
.list-item a, .list-item a:visited {
  color: yellowgreen;
}
</style>

<template>
  <router-link class="list-item" tag="div" :to="{ name: 'PeopleDetail', params: { userId: userId }, props: { item: item }}">
    <a>{{item.name}}</a>
  </router-link>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item'],
  computed: {
    userId: function () {
      return `${this.item.url.split('/').slice(-2, -1)[0]}`
    }
  }
}
</script>
