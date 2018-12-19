<style>
.header {
    font-size: 56px;
    color: antiquewhite;
}
</style>

<template>
    <div>
        <div class="header">{{header}}</div>
    </div>
</template>

<script>

export default {
  name: 'PageHeader',
  props: ['header']
}
</script>
