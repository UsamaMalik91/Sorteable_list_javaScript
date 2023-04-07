const sortablelist=document.querySelector(".sortedlist");
const items =sortablelist.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
    setTimeout(()=> item.classList.add("dragging"),0);
});


item.addEventListener("dragend", ()=> item.classList.remove("dragging"));
});

const initSortableList=(e)=>{
    e.preventDefault();

    const draggingItem=sortablelist.querySelector(".dragging");

    const siblings=[...sortablelist.querySelectorAll(".item:not(.dragging)")];

    let nextSibling=siblings.find(sibling=> {

        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    sortablelist.insertBefore(draggingItem , nextSibling);
}

sortablelist.addEventListener("dragover", initSortableList);
sortablelist.addEventListener("dragenter", e=>e.preventDefault());