<template>
  <div>
	<Header/>
        <h1>Bienvenu dans votre interface</h1>
        <Count/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/layout/Header.vue'
import Count from '@/components/Count.vue'

export default {
  name: 'home',
  components: {
    Header,
    Count
  }
}
</script>
