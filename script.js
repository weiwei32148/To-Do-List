const form =document.querySelector("#new-task-form");
const input=document.querySelector("#new-task-input");
const list_el=document.querySelector("#tasks");


function inputLength(){
	return input.value.length;
}


form.addEventListener('submit', function(e){
  e.preventDefault();


	if (inputLength()>1){

		createTaskElement(input.value);
  };

});


// creat task element divs

function createTaskElement(task){

  const task_el=document.createElement("div");
  task_el.classList.add("task");

  const task_content_el=document.createElement("div");
  task_content_el.classList.add("content");
  task_content_el.innerText=task;
 

  task_el.appendChild(task_content_el);
  list_el.appendChild(task_el);
  input.value=""

   // create task input, add class to task 

  const task_input_el=document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type="text";
  task_input_el.value=task;
  task_input_el.setAttribute("readonly","readonly");

  // create buttons

  const task_actions_el=document.createElement("div");
  task_actions_el.classList.add("actions");
  const task_edit_el=document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerHTML="Edit";

  const task_delete_el=document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerHTML="Delete";


  // add buttons to the action div
  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);
  task_el.appendChild(task_actions_el);

  //  task_actions_el, task_content_el are child of task_el
  // tasl_el is child of list_el


  task_edit_el.addEventListener("click", () => {
    if (task_edit_el.innerText.toLowerCase()=="edit"){
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
      task_edit_el.innerText ="Save";
    } else {
      task_input_el.setAttribute("readonly","readonly");
      task_edit_el.innerText="Edit";
    }

  });

  task_delete_el.addEventListener("click",()=>{
    list_el.removeChild(task_el);

  });

};







