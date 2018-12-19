<template>
    <div>
        <router-link class="list-item" tag="div" :to="{ path: '#'}">
            <a>{{title}}</a>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LinksComponent',
  props: ['link', 'dataPath'],
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': this.link }).then(result => {
      this.title = result.data[this.dataPath]
    }, error => {
      console.log(error)
      this.title = 'Error fetching the film name!'
    })
  }
}
</script>
