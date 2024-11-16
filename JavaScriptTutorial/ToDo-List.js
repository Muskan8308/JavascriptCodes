const todoList = [];

renderTodo();

function renderTodo()
{
    let todoHtml = "";

    for(let i = 0; i < todoList.length; i++)
    {
        const todoObject = todoList[i];
       // const name = todoObject.name;
        // const { name } = todoObject;
        // const { dueDate } = todoObject;       // Another way of doing above  
        const {name, dueDate} = todoObject;
        const html =` 
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
                todoList.splice(${i}, 1);
                renderTodo();
            " class = "delete-btn">Delete</button>
        `;
        todoHtml += html;
    }

    document.querySelector('.js-todoList').innerHTML = todoHtml ;

}

function addTodo() {
    const inputEle = document.querySelector(".js-input");       
    const name = inputEle.value;  // This will bring the value from inputEle
    
    const inputDate = document.querySelector(".duedate-input");
    const dueDate = inputDate.value;
    
    
    todoList.push({
        // name : name,
        // duedate : duedate
        name, dueDate
    });            // This push the value into the array

    inputEle.value = "";                           // This will set the default text
    renderTodo();
}
