class Tarefa{
    constructor(state, description){
        this.state = state
        this.description = description
    }  
}
let tarefas = []

const inputAdd = document.querySelector("#inputadd")
const buttonAdd = document.querySelector("#buttonadd")
const inputEdit = document.querySelector("#inputedit")
const buttonEdit = document.querySelector("#buttonedit")
const lists = document.querySelector("#lists")

buttonAdd.addEventListener('click', () =>{
    const tarefa = new Tarefa(
        this.state = false,
        this.description = inputAdd.value
    )
    tarefas.push(tarefa)
    toShow()
})
const toShow = () => {
    lists.innerHTML = ""
    tarefas.map((e) =>{ 
        const li = document.createElement("li")
        li.setAttribute("class","d-flex flex-row bd-highlight mb-3 border border-5 rounded-4")
        li.innerHTML =`
            <button class="btn btn-outline-secondary"><i class="fa-solid fa-check"></i></button>
            <p style="margin: 2px auto;">${e.description}</p>
            <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-outline-secondary ms-1"><i class="fa-solid fa-xmark" onclick="inputDelete(${tarefas.indexOf(e)})"></i><button>
            ` 
        lists.appendChild(li) 
    })
}

function inputDelete(i){
    tarefas.splice(i, 1)
    toShow()
}
