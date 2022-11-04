<template>
    <div class="mt-20 ml-10">
        <div >
            <button class="mr-5" @click="filter ='all'">All</button>
            <button  @click="filter = 'favs'">Favs</button>
            <p>Obecnie masz {{taskStore.totalCount}} zadań do zrobienia</p>
        </div>
        <div v-if="filter === 'all'">
            <p>Wszystkie zadania</p>
            <div v-for="task in taskStore.tasks" :key="task.id">
                {{task.title}}
            </div>
        </div>
        <div v-if="filter === 'favs'">
            <p>Ulubione zadania ( {{taskStore.favCount}} )</p>
            <div v-for="task in taskStore.favs" :key="task.id">
                {{task.title}}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useTaskStore} from './store/useTaskStore'
import {ref} from 'vue'

const taskStore = useTaskStore()

const filter = ref('all')
</script>

<style scoped>

</style>