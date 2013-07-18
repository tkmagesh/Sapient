(function(window,undefined){
	function initialize(){
		document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
	}
	function onBtnAddTaskClick(){
		var txtTask,
			ulTaskList,
			newTaskItem;

		txtTask = document.getElementById("txtTask");
		ulTaskList = document.getElementById("ulTaskList");
		
		newTaskItem = document.createElement("li");
		newTaskItem.innerHTML = txtTask.value;
		newTaskItem.addEventListener("click",onTaskItemClick);
		ulTaskList.appendChild(newTaskItem);

	}
	function onTaskItemClick(){
		if (this.classList.contains("completed")) {
			this.classList.remove("completed") ;
		} else {
			this.classList.add("completed");			
		}
	}
	function onBtnRemoveCompletedClick(){
		var i,
			count,
			taskItem,
			taskList;
		taskList = document.getElementById("ulTaskList");
		for(i=0;count=taskList.children.length,i<count;i++){
			taskItem = taskList.children[i];
			if (taskItem.classList.contains("completed")){
				taskList.removeChild(taskItem);
			}
		}
	}

	window.addEventListener("DOMContentLoaded",initialize);
})(window);