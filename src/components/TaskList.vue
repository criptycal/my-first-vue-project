<template>
<ul>
    <li v-for="(task, index) in tasks" :key="index" @click="$router.push(`/tasks/${task._id}`)">
        {{task.title}}
    </li>
</ul>
    
</template>

<script lang="ts">
"use strict";
import { defineComponent } from 'vue'
import { getTasks } from '../api/TaskApi';
import type { Task } from '../interfaces/Task';
export default defineComponent({
    name: 'TaskList',
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async fetchTasks() {
            try {
                const res = await getTasks();
                this.tasks = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.fetchTasks();
    }

})
</script>