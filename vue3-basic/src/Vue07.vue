<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>自定义hook 请求一张狗的图片</h1>
    <h1>{{ count }} -- count</h1>
    <h1>{{ double }} --- double</h1>
    <!-- <h1>{{refData.double}}</h1> -->
    <h1>{{ person.name }} --- person-name</h1>
    <h1 v-if="loading">loading!...</h1>
    <!-- <img v-if="loaded" :src="result.message" /> -->
    <img v-if="loaded" :src="result[0].url" />

    <h1>鼠标点击的位置 {{ x }} {{ y }}</h1>
    <button @click="increase">😁+1</button>
    <div>
      <button @click="updateGreeting">Update Title - {{ greetings }}</button>
    </div>
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
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
export default defineComponent({
  name: "App",

  setup() {
    interface DataProps {
      count: number;
      double: number;
      increase: () => void;
      numbers: number[];
      person: { name?: string };
    }

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
      numbers: [0, 1, 2],
      person: {},
    });
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello!";
    };
    const { x, y } = useMousePosition();
    ///狗
    // const { result, loading, loaded, error } = useURLLoader<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    ///🐱
    const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')

    watch(result, () => {
      if (result.value) {
        // console.log("value", result.value.message);
      }
    });
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log("old", oldValue);
      console.log("new", newValue);
      document.title = "updated" + greetings.value + data.count;
    });
    const refData = toRefs(data);
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
      loaded,
    };
  },
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