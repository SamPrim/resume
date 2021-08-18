<template>
  <div id="main" class="grid w-full grid-cols-1 gap-4 mx-auto md:grid-cols-5 md:w-4/5">
   <info class="w-screen h-full col-span-2 mx-auto bg-blue-800 md:w-auto white-text " />
   <course class="col-span-3 dark-text"  />
  </div>
</template>

<script>
import Course from '@/components/Course'
import Info from '@/components/Info'

export default {
  name: 'App',
  components: {
    Course,
    Info
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dark-text{
  color: #3c3c3c;
}
.white-text{
  color: #e1e5e9;
}
</style>
