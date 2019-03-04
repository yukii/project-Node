<template lang="html">
    <div>
    	<h1>Modifier le salarié n {{id}}</h1>
        <One/>
    </div>
</template>

<script>
import One from '@/components/SalaryDetails.vue'

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
