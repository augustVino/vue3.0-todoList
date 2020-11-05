<template>
    <div class="wrapper">
        <!-- <p>
            <img alt="Vue logo" src="./assets/logo.png">
        </p> -->

        <todo-input />
        <todo-list :todoList="todoList"/>
    </div>
</template>

<script lang="ts">

    import { computed, defineComponent, onMounted, reactive } from 'vue';
    import TodoList from '@/components/TodoList/index.vue'
    import TodoInput from '@/components/TodoInput/index.vue'
    import { IUseTodo, useTodo } from './hooks';
    import { Store, useStore } from 'vuex';

    export default defineComponent({
        name: 'App',
        components: { TodoList, TodoInput },
        setup(){
            const { setTodoList }:IUseTodo = useTodo();
            const store:Store<any> = useStore();

            onMounted(() => {
                setTodoList();
            })
            
            return {
                todoList: computed(() => store.state.list)
            }
        }
    });
</script>

<style>

</style>
