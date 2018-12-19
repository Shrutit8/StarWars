<template>
    <div>
        <a class="back" href="" @click="$router.push({path: `/people/${prev}`})">&lt;&lt; previous character</a>
        <a class="back" href="" @click="$router.push({name: 'CharacterListPage'})">back to list</a>
        <a class="back" href="" @click="$router.push({path: `/people/${next}`})">next character &gt;&gt;</a>
    </div>
</template>

<script>

export default {
  name: 'PrevBackNextComponent',
  props: ['prev', 'next']
}
</script>
