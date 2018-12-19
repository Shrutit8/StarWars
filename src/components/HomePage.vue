<template>
    <div>
        <PageHeader :header="title"></PageHeader>
        <router-link class="list-item" tag="div" :to="{ name: 'CharacterListPage'}">
            <a>Characters</a>
        </router-link>
        <div><a href="#">Films</a></div>
        <div><a href="#">Vehicles</a></div>
        <div><a href="#">Speices</a></div>
        <div><a href="#">Starships</a></div>
    </div>
</template>

<script>
import PageHeader from './PageHeader'

export default {
  name: 'HomePage',
  components: {
    PageHeader
  },
  data () {
    return {
      title: 'Star Wars'
    }
  }
}
</script>
