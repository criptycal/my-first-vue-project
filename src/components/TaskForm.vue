<template>
    <h1>Task Form</h1>

    <form @submit.prevent="saveTask()">
        <input type="text" placeholder="write a title" v-model="task.title"/>
        <textarea rows="3" placeholder="add a description" v-model="task.description"></textarea>
        <button :disabled="!task.title || !task.description">Guardar</button>
    </form>

    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type {Task} from '../interfaces/Task';
import {createTask} from '../api/TaskApi';

export default defineComponent({
    setup() {
        
    },
    data() {
        return {
            task: {} as Task
        }
    },
    methods:  {
      async saveTask() {
        try {
            const res = await createTask(this.task);
            console.log(res);
            this.$router.push({ name: "tasks" });
        } catch (error) {
            console.log(error);
        }
        }
    }
})
</script>
