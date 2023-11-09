class Tarefa{
    constructor(description){
        this.state = false
        this.description = description
    } 
}
let tarefas = []

const inputAdd = document.querySelector("#inputadd")
const buttonAdd = document.querySelector("#buttonadd")
const inputEdit = document.querySelector("#inputedit")
const lists = document.querySelector("#lists")
const allTasks = document.querySelector("#allTasks")
const toDo = document.querySelector("#toDo")
const taskDone = document.querySelector("#taskDone")
let position

inputAdd.addEventListener('keydown', (e) =>{
    if (e) {
        inputAdd.classList.remove('is-invalid')
    }
})
buttonAdd.addEventListener('click', () =>{
    const tarefa = new Tarefa(inputAdd.value)
    if(tarefa.description){
        tarefas.push(tarefa)
    }else{
        inputAdd.classList.add('is-invalid')
        inputAdd.focus()
    }
    toShow()
})
inputAdd.addEventListener('keydown', (e) =>{
    if(e.key === "Enter"){
        const tarefa = new Tarefa(inputAdd.value)
        tarefas.push(tarefa)
        inputAdd.value = ''
        toShow()
        e.preventDefault()
}})
const toShow = () => {
    lists.innerHTML = ""
    tarefas.map((e) =>{ 
        const li = document.createElement("li")
        li.setAttribute("class",`d-flex flex-row bd-highlight mb-3 border border-5 rounded-4`)
        li.innerHTML =`
            <button onclick="alterButton(${tarefas.indexOf(e)})" class="btn houver"><i class="fa-solid fa-check"></i></button>
            <p class="task ${e.state && "done"}">${e.description}</p>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn houver"><i class="fa-solid fa-pen" onclick="editList(${tarefas.indexOf(e)})"></i></button>
            <button class="btn houver"><i class="fa-solid fa-xmark" onclick="inputDelete(${tarefas.indexOf(e)})"></i></button>
            ` 
        lists.appendChild(li) 
    })
    localStorage.setItem('lista',JSON.stringify(tarefas))
}
function inputDelete(i){
    tarefas.splice(i, 1)
    toShow()
}
function editList(i) {
    inputEdit.value = tarefas[i].description;
    return position = i
}
function saveEdit(){
    tarefas[position].description = inputEdit.value
    toShow()  
}
function alterButton(i){
  tarefas[i].state = !tarefas[i].state
  toShow()
}
allTasks.addEventListener('click', () => {
    toShow()
})
taskDone.addEventListener('click', () =>{
    let aFazer = tarefas.filter((el) =>{
       if(el.state == true){
        return el
       }
    })
    lists.innerHTML = ""
    aFazer.map((e) =>{ 
        const li = document.createElement("li")
        li.setAttribute("class",`d-flex flex-row bd-highlight mb-3 border border-5 rounded-4`)
        li.innerHTML =`
            <button onclick="alterButton(${aFazer.indexOf(e)})" class="btn houver"><i class="fa-solid fa-check"></i></button>
            <p class="task ${e.state && "done"}">${e.description}</p>
            <button class="btn houver"><i class="fa-solid fa-pen" onclick="editList(${aFazer.indexOf(e)})"></i></button>
            <button class="btn houver"><i class="fa-solid fa-xmark" onclick="inputDelete(${aFazer.indexOf(e)})"></i></button>
            ` 
        lists.appendChild(li) 
    })
})
toDo.addEventListener('click', () =>{
    let aFazer = tarefas.filter((el) =>{
       if(el.state == false){
        return el
       }
    })
    lists.innerHTML = ""
    aFazer.map((e) =>{ 
        const li = document.createElement("li")
        li.setAttribute("class",`d-flex flex-row bd-highlight mb-3 border border-5 rounded-4`)
        li.innerHTML =`
            <button onclick="alterButton(${aFazer.indexOf(e)})" class="btn houver"><i class="fa-solid fa-check"></i></button>
            <p class="task ${e.state && "done"}">${e.description}</p>
            <button class="btn houver"><i class="fa-solid fa-pen" onclick="editList(${aFazer.indexOf(e)})"></i></button>
            <button class="btn houver"><i class="fa-solid fa-xmark" onclick="inputDelete(${aFazer.indexOf(e)})"></i></button>
            ` 
        lists.appendChild(li) 
    })
})
function reload() {
    const taskOfLocalStorage = localStorage.getItem('lista');
    if(taskOfLocalStorage){
    tarefas = JSON.parse(taskOfLocalStorage);
    }
    toShow();
    console.log(taskOfLocalStorage)
}
reload();