
import {ref, onMounted, onUnmounted, toRefs, reactive} from "vue"
function useMousePosition(){
    // ref实现
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(()=>{
        document.addEventListener('click', updateMouse);
    });

    onUnmounted(()=>{
        document.removeEventListener('click', updateMouse);
    })

    return {x, y}


    ///  reactive实现
    // interface MousePosition {
    //     x: number;
    //     y: number;
    //     updateMouse: (e: MouseEvent) => void;
    // }
    // const mousePosition: MousePosition = reactive({
    //     x: 0,
    //     y: 0,
    //     updateMouse: (e: MouseEvent) => {
    //         mousePosition.x = e.pageX;
    //         mousePosition.y = e.pageY;
    //         mousePosition.y = 250;

    //     }
    // }) 
    // const refMousePosition = toRefs(mousePosition);


    // onMounted(()=>{
    //     document.addEventListener('click', mousePosition.updateMouse);
    // });

    // onUnmounted(()=>{
    //     document.removeEventListener('click', mousePosition.updateMouse);
    // })
    // return {...refMousePosition}
}

export default useMousePosition