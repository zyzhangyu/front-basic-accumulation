<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>使用reactive和toRefs</h1>
    <h1>{{ count }} -- count</h1>
    <h1>{{ double }} --- double</h1>
    <!-- <h1>{{refData.double}}</h1> -->

    <ul>
        <li v-for="number in numbers" :key="number">
            <h1>{{number}}</h1>
        </li>
    </ul>

    <h1>{{person.name}} --- person-name</h1>

    <button @click="increase">😁+1</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    interface DataProps {
      count: number;
      double: number;
      increase: () => void;
      numbers: number[];
      person: { name?  : string };
    }
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
      numbers: [0,1,2],
      person:{}
    });
    data.numbers[0] = 5;
    data.person.name = "nick"
    const refData = toRefs(data); 
    return {
      ...refData,
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