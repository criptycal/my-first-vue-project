<template>
    <ul>
        <li>
            <router-link to="/">tasks</router-link>
        </li>
        <li>
            <router-link to="/tasks/new">create tasks</router-link>
        </li>
    </ul>
</template>

<script lang="ts">

"use strict";
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar',
    components: {},
})
</script>