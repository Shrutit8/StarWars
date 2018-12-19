import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CharacterListPage from '@/components/CharacterListPage'
import PeopleDetail from '@/components/PeopleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/people',
      name: 'CharacterListPage',
      component: CharacterListPage
    },
    {
      path: '/people/?page=:page',
      name: 'CharacterListPaginated',
      component: CharacterListPage,
      props: true
    },
    {
      path: '/people/:userId',
      name: 'PeopleDetail',
      component: PeopleDetail,
      props: true
    }
  ]
})
