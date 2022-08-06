<template>

    <Navbar />
    <RouterView />
    
</template>

<script lang="ts">

  "use strict";
  import { defineComponent } from "vue";
  import Navbar from "./components/Navbar.vue";

  export default defineComponent({
    name: "App",
    components:{
      Navbar
    }
  });

</script>

