const item = document.querySelector('#item');
const todobox = document.querySelector('#to-do-box');

item.addEventListener("keyup", (event) => {
    // console.log(event);
    if (event.key == "Enter") {
        addtodo(this.value)
        this.value = ""
    }
})
const addtodo = (item) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `
         ${item}
    </i><i class="fa-sharp fa-solid fa-xmark"></i>
    `;



    listItem.addEventListener("click", () => {
        this.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click", () => {
        listItem.remove()
    })
    todobox.appendChild(listItem);
}
