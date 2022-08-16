const renderTasks = (arrTasks, htmlID, info, button) => {
    let content = '';
    for (let i = 0; i < arrTasks.length; i++) {
        content += `
        <li id="todoLi" class="${info}">${arrTasks[i].name}
            <div>
                <i id="btnDel" onclick="${button}(${i})" class="btnCrTr fa-regular fa-trash-can"></i>
                <i id="btnCheck${i}" onclick="checkLi(${i})" class="btnCr fa-regular fa-circle-check"></i>
            </div>
        </li>
        `;
    };

    document.querySelector(htmlID).innerHTML = content;
}

const checkLi = (idTask) => {
    compTasks.push({
        name: tasks[idTask].name
    })
    renderTasks(compTasks, '#completed', 'completedT', 'delLiDone');

    tasks.splice(idTask, 1);
    renderTasks(tasks, '#todo', 'ongoingT', 'delLi');
}

const delLi = (idTask) => {
    tasks.splice(idTask, 1);
    renderTasks(tasks, '#todo', 'ongoingT', 'delLi');
}

const delLiDone = (idTask) => {
    compTasks.splice(idTask, 1);
    renderTasks(compTasks, '#completed', 'completedT', 'delLiDone');
}