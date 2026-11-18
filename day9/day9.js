
let todos = [
  {
    id: 1,
    text: "Học JavaScript DOM",
    completed: false
  },
  {
    id: 2,
    text: "Luyện tập Event Delegation",
    completed: false
  },
  {
    id: 3,
    text: "Hoàn thành bài tập Day 9",
    completed: true
  }
];

// 1. Truy cập các phần tử DOM
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

// ID tiếp theo, không trùng với dữ liệu ban đầu
let nextId = Math.max(0, ...todos.map(todo => todo.id)) + 1;

// 2. Hàm render danh sách
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const li = document.createElement("li");

    li.className = todo.completed
      ? "todo-item completed"
      : "todo-item";

    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "btn-toggle";
    toggleButton.dataset.action = "toggle";
    toggleButton.textContent = todo.completed
      ? "Bỏ hoàn thành"
      : "Hoàn thành";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn-delete";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Xóa";

    actions.append(toggleButton, deleteButton);
    li.append(span, actions);
    todoList.append(li);
  });

  updateTodoCount();
}

// 3. Hàm thêm công việc
function addTodo(text) {
  const newTodo = {
    id: nextId++,
    text: text,
    completed: false
  };

  todos.push(newTodo);

  renderTodos();
}

// 4. Hàm xóa công việc
function deleteTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  renderTodos();
}

// 5. Hàm đánh dấu hoàn thành
function toggleTodo(id) {
  const todo = todos.find(function (item) {
    return item.id === id;
  });

  if (!todo) {
    return;
  }

  todo.completed = !todo.completed;

  renderTodos();
}

// 6. Hàm thống kê
function updateTodoCount() {
  const total = todos.length;

  const completedCount = todos.filter(function (todo) {
    return todo.completed === true;
  }).length;

  const pendingCount = total - completedCount;

  document.querySelector("#totalCount").textContent = total;
  document.querySelector("#completedCount").textContent = completedCount;
  document.querySelector("#pendingCount").textContent = pendingCount;
}

// 7. Lắng nghe sự kiện submit để thêm công việc
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  addTodo(text);

  todoInput.value = "";
  todoInput.focus();
});

// 8. EVENT DELEGATION
// Một listener xử lý cả Xóa và Hoàn thành
todoList.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");

  if (!button || !todoList.contains(button)) {
    return;
  }

  const li = button.closest("li[data-id]");

  if (!li || !todoList.contains(li)) {
    return;
  }

  const id = Number(li.dataset.id);
  const action = button.dataset.action;

  if (action === "delete") {
    deleteTodo(id);
  } else if (action === "toggle") {
    toggleTodo(id);
  }
});

// 9. Khởi tạo giao diện
renderTodos();
