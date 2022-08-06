<template>
    <h1>TaskDetails</h1>
    <form @submit.prevent="onUpdate()">
        <input type="text" placeholder="write a title" v-model="task.title"/>
        <textarea rows="3" placeholder="add a description" v-model="task.description"></textarea>
        <button>Update</button>
    </form>
    <button @click="onDelete()">Delete</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { deleteTask, getTask, updateTask } from '../api/TaskApi'
import type { Task } from '../interfaces/Task';

export default defineComponent({
    data(){
        return{
            task: {} as Task
        }
    },
    methods: {
        async fetchTask(id: string) {
            const {data} = await getTask(id);
            this.task = data;
        },
        async onUpdate() {
            const id = this.$route.params.id;
            try {
                if(typeof id === 'string'){
                const res = await updateTask(id, this.task);
                console.log(res);
            }
                this.$router.push({ name: "tasks" });
            } catch (error) {
                console.log(error);
            }
            
        },

        async onDelete(){
            try {
                const id = this.$route.params.id;
                if(typeof id === 'string'){
                const res = await deleteTask(id);
                console.log(res);
                }
                this.$router.push({ name: "tasks" });
            } catch (error) {
                console.log(error);
            }
            
        }
        
    },
    mounted() {
        //console.log(this.$route.params.id);
        if(typeof this.$route.params.id === 'string'){
            this.fetchTask(this.$route.params.id);
        }
    }
})
</script>
