<template lang="html">
    <div>
    	<h1>Modifier le client n {{id}}</h1>
        <One/>
    </div>
</template>

<script>
import One from '@/components/ClientDetails.vue'

export default {
	data() {
        return {
            id:this.$route.params.id
        }
    },
  	components: {
    	One,
  	}
}
</script>

<style lang="css" scoped>
</style>
