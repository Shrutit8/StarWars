<style>
.container {
  color: antiquewhite;
}
.character-details{
  margin-top: 50px;
}
.details {
  position: absolute;
  width: 20%;
  left: 0%;
}
.movies {
  position: absolute;
  width: 20%;
  left: 20%;
}
.species {
  position: absolute;
  width: 20%;
  left: 40%;
}
.vehicles {
  position: absolute;
  width: 20%;
  left: 60%;
}
.starship {
  position: absolute;
  width: 20%;
  left: 80%;
}
.back, .prev, .next {
  padding: 15px;
  margin-top: 15px;
  font-size: 25px;
  text-align: center;
}
</style>

<template>
    <div class="container">
      <PageHeader :header=character.name :key=character.name></PageHeader>
      <PrevBackNextComponent :prev=prev :next=next :key=character></PrevBackNextComponent>
      <div class="character-details">
        <div class="details">
          <span> Height : {{character.height}} </span><br>
          <span> Mass : {{character.mass}} </span><br>
          <span> Hair color : {{character.hair_color}} </span><br>
          <span> Skin color : {{character.skin_color}} </span><br>
          <span> Eye color : {{character.eye_color}} </span><br>
          <span> Birth year : {{character.birth_year}} </span><br>
          <span> Gender : {{character.gender}} </span><br><br>
        </div>
        <div class="movies">
          <span> Movies : </span><br>
          <LinksComponent v-for="movie in character.films" :link="movie" :dataPath="'title'" :key=movie></LinksComponent><br><br>
        </div>
        <div class="species">
          <span> Speices : </span><br>
          <LinksComponent v-for="speice in character.species" :link="speice" :dataPath="'name'" :key=speice></LinksComponent><br><br>
        </div>
        <div class="vehicles">
          <span> Vehicles : </span><br>
          <LinksComponent v-for="vehicle in character.vehicles" :link="vehicle" :dataPath="'name'" :key=vehicle></LinksComponent><br><br>
        </div>
        <div class="starship">
          <span> Starship : </span><br>
          <LinksComponent v-for="starship in character.starships" :link="starship" :dataPath="'name'" :key=starship></LinksComponent>
        </div>
      </div>
    </div>
</template>

<script>
import http from '../js/http.js'
import LinksComponent from './LinksComponent'
import PageHeader from './PageHeader'
import PrevBackNextComponent from './PrevBackNextComponent'

export default {
  name: 'PeopleDetail',
  components: {
    LinksComponent,
    PageHeader,
    PrevBackNextComponent
  },
  data () {
    return {
      character: '',
      next: 0,
      prev: 0,
      characterName: 'Loading Character Details...'
    }
  },
  props: ['item'],
  mounted () {
    console.log(this.total)
    if (!this.item) {
      http({ method: 'GET', 'url': `https://swapi.co/api${this.$route.path}` }).then(result => {
        this.character = result.data
      }, error => {
        console.log(error)
      })
    } else {
      this.character = this.item
    }
    http({ method: 'GET', 'url': `https://swapi.co/api/people` }).then(result => {
      let current = parseInt(this.$route.path.split('/').slice(-1)[0])

      if (current === 1) {
        this.prev = result.data.count
      } else {
        this.prev = current - 1
      }

      if (current === result.data.count) {
        this.next = 1
      } else {
        this.next = current + 1
      }
    }, error => {
      console.log(error)
    })
  }
}
</script>
