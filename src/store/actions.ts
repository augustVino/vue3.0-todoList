import { IState, ITodo } from '@/typings';
import { Commit } from 'vuex';
import { SET_TODO, SET_TODO_LIST,SET_STATUS, SET_DOING,REMOVE_TODO } from './actionTypes';

interface ICtx{
    commit: Commit;
    state: IState
}

export default{
    [SET_TODO]({commit}: ICtx, todo: ITodo): void{
        commit(SET_TODO, todo);
    },
    [SET_TODO_LIST]({commit}:ICtx, todoList:ITodo[]):void{
        commit(SET_TODO_LIST, todoList)
    },
    [SET_STATUS]({commit}:ICtx, id:number):void{
        commit(SET_STATUS, id)
    },
    [SET_DOING]({commit}:ICtx, id:number):void{
        commit(SET_DOING, id)
    },
    [REMOVE_TODO]({commit}:ICtx, id:number):void{
        commit(REMOVE_TODO, id)
    },
}