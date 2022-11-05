<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="New task..." v-model="newTask"/>
            <button><p>Add task</p></button>
        </form>
    </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue';
import {useTaskStore} from '../store/useTaskStore'

const taskStore = useTaskStore()
const newTask = ref('')

const handleSubmit = () => {
    if(newTask.value.length > 0){
    taskStore.addNew({
        title: newTask.value,
        isFav: false,
        id: Math.floor(Math.random()*1000)
    })
    newTask.value = ''
    }
    else{
        
    }
}
</script>

<style lang="scss" scoped>

</style>