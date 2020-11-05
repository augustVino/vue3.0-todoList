<template>
    <div class="inp">
        <input type="text" v-model="todoValue" @keydown.enter="submitHander">
    </div>

</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import {IUseTodo, useTodo} from '@/hooks/index'
export default defineComponent({
    name: 'TodoInput',
    setup(){
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();

        const submitHander = (e: KeyboardEvent):void => {
            if(todoValue.value.trim().length){
                console.log(todoValue.value)
                setTodo(todoValue.value);
                // 清空输入框
                todoValue.value = '';
            }
        }

        return {todoValue,submitHander}
    }
})
</script>

<style>

</style>