<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>使用Vue3的 Teleport</h1>
    <h1>{{ count }} -- count</h1>
    <h1>{{ double }} --- double</h1>
    <!-- <h1>{{refData.double}}</h1> -->
    <h1>{{ person.name }} --- person-name</h1>
    <h1 v-if="loading">loading!...</h1>
    <img v-if="loaded" :src="result.message" />
    <img v-if="loaded" :src="result[0].url" />
    <button @click="openModal" >打开按钮</button>

    <div><modal :isOpen="modalIsOpen"  @close-modal="onModalClose"> My modal</modal></div>
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
import Modal from "./Modal.vue";

export default defineComponent({
  components: { Modal },
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
    ///狗
    // const { result, loading, loaded, error } = useURLLoader<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    ///🐱
    const { result, loading, loaded } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );

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
    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const onModalClose = () => {
      modalIsOpen.value = false;
    };
    return {
      ...refData,
      greetings,
      updateGreeting,

      result,
      loading,
      loaded,
      modalIsOpen,
      openModal,
      onModalClose,
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