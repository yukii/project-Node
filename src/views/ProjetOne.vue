<template lang="html">
    <div>
    	<h1>Modifier le projet n {{id}}</h1>
        <One/>
    </div>
</template>

<script>
import One from '@/components/ProjectDetails.vue'

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
