const todoData = [];

const initData = [
    {
        id: 0,
        isDone: false,
        content: "nodejs 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 4,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
];

const initialize = () => {
    TodoData.todoData = [...initData];
};

export const TodoData = {
    todoData,
    initialize,
};
