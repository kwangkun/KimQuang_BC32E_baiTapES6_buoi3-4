let tasks = [];
let compTasks = [];

document.querySelector('#addItem').onclick = () => {
    let taskInput = document.querySelector('#newTask').value;

    tasks.push({
        name: taskInput
    });

    document.querySelector('#newTask').value = '';

    renderTasks(tasks, '#todo', 'ongoingT', 'delLi');
}

document.querySelector('#two').onclick = () => {
    tasks.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    renderTasks(tasks, '#todo', 'ongoingT', 'delLi');

    compTasks.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    renderTasks(compTasks, '#completed', 'completedT', 'delLiDone');
    alert('Đã sắp xếp công việc từ A-Z!')
}

document.querySelector('#three').onclick = () => {
    tasks.sort((a, b) => {
        if (a.name < b.name) { return 1; }
        if (a.name > b.name) { return -1; }
        return 0;
    });
    renderTasks(tasks, '#todo', 'ongoingT', 'delLi');

    compTasks.sort((a, b) => {
        if (a.name < b.name) { return 1; }
        if (a.name > b.name) { return -1; }
        return 0;
    });
    renderTasks(compTasks, '#completed', 'completedT', 'delLiDone');
    alert('Đã sắp xếp công việc từ Z-A!')
}