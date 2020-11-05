# vue3-todo

## 组件 -> commit -> mutation -> state -> 视图变更 -> 响应式

-   响应式

    1. 组件 -> dispatch -> action
    2. dispatch -> type(actionType) -> 某一个 action
    3. action -> commit 调用 -> mutation
    4. mutation -> change -> state
    5. render 方案：state -> 数据流 -> 视图

-   文件集合

    1. actionTypes action 类型
    2. actions 调用 mutation 的方法
    3. mutations 更改 state 的方法
    4. state 中央数据管理池
    5. store 出口 actions、mutations、state 统一到仓库里进行管理

## 组件划分

-   TodoList
    1. TodoInput -> 输入的组件
    2. TodoList -> 列表组件
        - TodoItem -> 列表项
            1. 完成或未完成的选项 checkbox
            2. 删除该项 button
            3. 正在做的确认按钮 button

# vue 3.0 文档

https://v3.cn.vuejs.org/
