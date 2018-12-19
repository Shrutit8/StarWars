<style>
.pagination {
  margin: 5px;
  color: antiquewhite;
  text-decoration: underline;
  padding-bottom: 10px;
}
.container {
  margin-top: 10px;
}
.active {
  color: yellowgreen;
  text-decoration: none;
}
.break-view {
  color: antiquewhite;
  text-decoration: none;
}
</style>

<template>
    <div>
        <PageHeader :header="title"></PageHeader>
        <ListItem v-for="item in items" :item=item :key=item.name></ListItem>
        <paginate
          :page-count=noOfPages
          :page-link-class="'pagination'"
          :prev-link-class="'pagination'"
          :next-link-class="'pagination'"
          :break-view-link-class="'break-view'"
          :no-li-surround=true
          :click-handler=clickCallback
          :prev-text="'Prev'"
          :next-text="'Next'"
          v-model="page"
          :container-class="'container'"
          :key=items>
        </paginate>
    </div>
</template>

<script>
import http from '../js/http.js'
import ListItem from './ListItem'
import PageHeader from './PageHeader'
import Paginate from 'vuejs-paginate'

export default {
  name: 'CharacterListPage',
  components: {
    ListItem,
    PageHeader,
    Paginate
  },
  methods: {
    clickCallback (pageNum) {
      this.$router.push({ path: `/people/?page=${pageNum}` })
      // this.$router.push({ name: 'CharacterListPaginated', params: {page: pageNum }})
      http({ method: 'GET', 'url': `https://swapi.co/api/people/?page=${pageNum}` }).then(result => {
        this.items = result.data.results
      }, error => {
        console.error(error)
      })
    }
  },
  data () {
    return {
      title: 'Star Wars - Characters',
      items: '',
      totalItems: 0,
      page: 0
    }
  },
  computed: {
    noOfPages: function () {
      return Math.ceil(this.totalItems / 10)
    }
  },
  mounted () {
    let url = 'https://swapi.co/api/people'
    this.page = 1
    if (this.$route.query.page) {
      url = `https://swapi.co/api/people/?page=${this.$route.query.page}`
      this.page = this.$route.query.page
    }
    http({ method: 'GET', 'url': url }).then(result => {
      this.items = result.data.results
      this.totalItems = result.data.count
    }, error => {
      console.error(error)
    })
  }
}
</script>
