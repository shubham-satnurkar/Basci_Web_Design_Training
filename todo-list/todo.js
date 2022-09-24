displayTask()
var inputTask = document.getElementById("inputTask");
var addTask = document.getElementById("addTask");


addTask.addEventListener('click', function () {
    if(inputTask.value.trim()!=0){
        var storeTask = localStorage.getItem("localTask");
        if (storeTask == null) {
            taskArr =[];
        } else {
            taskArr =JSON.parse(storeTask);
        }
        taskArr.push(inputTask.value);
        localStorage.setItem("localTask", JSON.stringify(taskArr));
        inputTask.value ="";
    }
    displayTask()
});
// For Task To Display in table row and column
function displayTask(){
    var storeTask = localStorage.getItem("localTask");
    if (storeTask == null) {
        taskArr =[];
    } else {
        taskArr =JSON.parse(storeTask);
    } 
    var html ="";   
    var taskTable = document.getElementById("taskTable");
    
    taskArr.forEach((item, index) => {
        html+= `
            <tr>
                
                <th class="w-75 p-3 text-dark">
                    ${item}
                </th>
                <th>
                    <button class="btn btn-info" onclick="editTask(${index})" id="editTask">Edit Task</button>
                </th>
                <th>
                    <button class="btn btn-danger" onclick="deleteTask(${index})" id="deleteTask">Delete Task</button>
                </th>
            </tr>
        `
    });
    taskTable.innerHTML =html;

}


// Edit Task
// var editTask = document.getElementById("editTask");
// var deleteTask = document.getElementById("deleteTask");

function editTask(index){
    var saveTaskInput = document.getElementById("saveTaskInput");
    var saveTaskBtn = document.getElementById("saveTaskBtn");
    saveTaskInput.value = index;
    var storeTask = localStorage.getItem("localTask");
    var taskArr =JSON.parse(storeTask);
    inputTask.value = taskArr[index];
    addTask.style.display="none";
    saveTaskBtn.style.display="block"
};


// Save Task
var saveTaskBtn = document.getElementById("saveTaskBtn");
saveTaskBtn.addEventListener("click", function(){
    var storeTask = localStorage.getItem("localTask");
    var taskArr =JSON.parse(storeTask);
    var saveTaskInput = document.getElementById("saveTaskInput").value;
    taskArr[saveTaskInput]= inputTask.value;
    saveTaskBtn.style.display="none";
    addTask.style.display="block";

    localStorage.setItem("localTask", JSON.stringify(taskArr));
    inputTask.value ="";
    displayTask();
});

// Delete Task
function deleteTask(index){
    var storeTask = localStorage.getItem("localTask");
    var taskArr =JSON.parse(storeTask);
    taskArr.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskArr));
    displayTask();
}

