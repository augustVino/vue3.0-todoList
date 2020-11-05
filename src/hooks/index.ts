import { REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST } from '@/store/actionTypes';
import { ITodo, TODO_STATUS } from "@/typings";
import { watch } from 'vue';
import { Store, useStore } from 'vuex';

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

export function useTodo(): IUseTodo {
    const store:Store<any> = useStore();
    const { setLocalList, getLocalList }: IUseStorage = useLocalStorage();
    const todoList:ITodo[] = getLocalList();

    // watch两个参数
    // 1. 返回要监视的对象
    // 2. 有变化后调用的方法（参数为变化后的对象）
    watch(() => {
        return store.state.list
    }, (todoList) => {
        setLocalList(todoList);
    });

    function setTodo(value:string):void {
        const todo = {
            id: +new Date(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo);
    }
    function setTodoList():void {
        store.dispatch(SET_TODO_LIST, todoList);
    }
    function removeTodo(id: number):void {
        store.dispatch(REMOVE_TODO,id)
    }
    function setStatus(id: number):void {
        store.dispatch(SET_STATUS,id)
    }
    function setDoing(id: number):void {
        store.dispatch(SET_DOING, id)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    };
}


/**
 * localStorage 相关
 */
interface IUseStorage{
    setLocalList: (todoList:ITodo[]) => void;
    getLocalList: () => ITodo[];
    removeLocalList: () => void;
}
export function useLocalStorage():IUseStorage{

    function setLocalList(todoList:ITodo[]): void{
        console.log(todoList)
        window.localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    function getLocalList():ITodo[]{
        return JSON.parse(window.localStorage.getItem('todoList') || '[]');
    }
    function removeLocalList(): void{
        window.localStorage.removeItem('todoList');
    }

    return {
        setLocalList,
        getLocalList,
        removeLocalList
    }
}