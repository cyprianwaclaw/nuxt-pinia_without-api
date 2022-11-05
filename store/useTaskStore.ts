import {defineStore} from 'pinia'

export const useTaskStore = defineStore('task',{
    state:()=>({
        tasks:[
            {id: 1, title: "Title 1", isFav: true},
            {id: 2, title: "Title 2", isFav: true},
            {id: 3, title: "Title 3", isFav: false},
        ]
    }),

    getters:{
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount(){
            return this.tasks.reduce((p,c)=>{
                return c.isFav ? p+1 : p;
            }, 0)
        },
        totalCount:(state)=>{
            return state.tasks.length
        }
    },
    actions:{
            addNew(task){
                this.tasks.push(task)
            },
            deleteTask(id){
                this.tasks = this.tasks.filter(t => {
                    return t.id !== id
            })},
            toggleFav(id){
                const task = this.tasks.find(t => t.id === id)
                task.isFav = !task.isFav
            }
    }
})