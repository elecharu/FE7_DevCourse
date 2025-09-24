// index.js
const todo = (() => {
    let todoList = [];

    function getRandomUUID() {
        return crypto.randomUUID();
    }

    return {
        addTodo(todo) {
            const uuid = getRandomUUID();
            const newTodo = {
                todo: todo,
                id: uuid,
                status: 0,
            };
            todoList.push(newTodo);
            console.log(`추가됨: ${todo}, UUID: ${uuid}`);
            return newTodo;
        },
        clearList() {
            todoList = [];
            console.log("전체 삭제 완료", todoList);
        },
        printTodoList() {
            if (todoList.length <= 0) return console.log(`TODO List : 할 일 없음`);

            const formattedTodoList = todoList.map(item => ({
                todo: item.todo,
                id: item.id,
                status: item.status === 1 ? "✅" : "❎"
            }));

            return console.log(`TODO List : ${JSON.stringify(formattedTodoList, null, 2)}`);
        },
        toggleTodo(id) {
            const item = todoList.find(t => t.id === id);
            if (!item) return console.log("해당 ID가 존재하지 않습니다.");
            item.status = item.status === 0 ? 1 : 0;
            console.log(`토글 완료: ${item.todo}, 현재 상태: ${item.status === 1 ? "완료" : "미완료"}`);
        },
        modifyTodo(id, newTodo) {
            const item = todoList.find(t => t.id === id);
            if (!item) return console.log("해당 ID가 존재하지 않습니다.");
            item.todo = newTodo;
            console.log(`수정 완료: UUID ${id}, 새로운 내용: ${newTodo}`);
        },
        deleteTodo(id) {
            const item = todoList.findIndex(t => t.id === id);
            if (item === -1) return console.log("해당 ID가 존재하지 않습니다.");
            const deleted = todoList.splice(item, 1)
            console.log(`삭제 완료: ${deleted[0].todo}`);
        }
    };
})();

export default todo;
