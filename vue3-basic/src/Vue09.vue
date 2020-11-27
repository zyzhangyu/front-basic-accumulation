<template>
  <div >
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>使用Suspense的一个界面</h1>

    <h1>Loading ... 123</h1>


      <Suspense timeout="0">
      <template #default>
        <async-show />
      </template>
      <template #fallback>
        <h1>Loading ...</h1>
        <async-show />
      </template>
    </Suspense>
  </div>

</template>

<script lang="ts">
interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

import { computed, defineComponent, reactive, toRefs, watch, ref } from "vue";
import AsyncShow from "./components/AsyncShow.vue";
export default defineComponent({
  components: { AsyncShow },
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>