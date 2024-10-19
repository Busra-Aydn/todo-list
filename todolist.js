const input = document.querySelector('#todoInput') ;
const addBtn = document.querySelector('#addButton');
const list = document.querySelector("#todoList");

//Sayfa yüklendiginde gorevleri Local Storage'dan yukle
document.addEventListener('DOMContentLoaded',() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))||[]
    storedTasks.forEach(gorev => {
        addTask(gorev)//Local Storage'daki her gorevi listeye ekler
    });
})


//Gorev Ekleme 
addBtn.addEventListener('click',()=>{

    const gorev = input.value.trim()
    if (gorev === "") {
        alert("lütfen bir görev ekleyiniz")
    } else if(isDuplicateTask(gorev)){ 
        alert("bu gorev mevcut !")
    } else{
        addTask(gorev)
        saveTasks(gorev)//gorevi local storage a kaydet
        input.value = "" //input alanını temizle
    }
})


//Aynı gorev kontrol fonksiyonu 
function isDuplicateTask(gorev) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks.includes (gorev);//Gorev listesinde var mı kontrol et
}


//Gorev ekleme fonksiyonu
function addTask(gorev) {
    const listItem = createListItem (gorev)
    list.appendChild (listItem);
}


//li (liste ogesi) olusturma 
function createListItem(gorev) {
    const listItem = document.createElement ('li')
    listItem.textContent = gorev

    //silme button u ekle
    const deleteBtn = createDeleteButton(listItem,gorev)
    listItem.appendChild (deleteBtn)

    return listItem
}



//silme buttonu oluşturma
function createDeleteButton(listItem,gorev) {
    const  deleteBtn = document.createElement('button')
    deleteBtn.textContent= 'sil'

    deleteBtn.addEventListener('click',()=>{
        listItem.remove()//gorevi listeden sil 
        removeTasks(gorev)//local storagedan kaldır 
    })
    return deleteBtn;
}


//Gorevleri local Storage'a kaydet
function saveTasks(gorev) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(gorev);
    localStorage.setItem('tasks',JSON.stringify(tasks));//local storage a kaydet
}

//local storage dan kaldır
function removeTasks(gorev) {
    let tasks = JSON.parse (localStorage.getItem('tasks')) || [];
    tasks = tasks.filter (task => task !== gorev)//gorevi listeden cıkar
    localStorage.setItem('tasks',JSON.stringify(tasks));//local storage'ı guncelle
} 