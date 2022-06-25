
let arrTody = [
    {
        id:1,
        subtitle:'Space Task 2',
        title:'Make Money Online Through'
    },
    {
        id:2,
        subtitle:'Space Task 2',
        title:'Search Engine Optimization'
    }
]

let arrInwork = [
    {
        id:1,
        subtitle:'Space Task 3',
        title:'Types Of Paper In Catelog'
    },
    {
        id:2,
        subtitle:'Space Task 2',
        title:'Global Resorts Net Work'
    },
    {
        id:3,
        subtitle:'Space Task 2',
        title:'Development Apps'
    }
]

let todoMission = document.querySelectorAll('.all-mission .todo-mission .todo')[0];
let inWorkMission = document.querySelectorAll('.all-mission .todo-mission .todo')[1];

let save = document.querySelector('.btnSave');

let addNewTasks = document.querySelectorAll('.new-task');
let closeTask = document.querySelector('#closeTask');
let addTask = document.querySelector('.box-newTask');
let indexAddNewTasks ; // để lấy ra vị trí của button new tasks

save.addEventListener("click",function(){
    let subtitle = document.querySelector('.input-form .box-input .subtitle');
    let title = document.querySelector('.input-form .box-input .title');
    

    let subtitleValue = subtitle.value;
    let titleValue = title.value;

    if(subtitleValue && titleValue){
        if(indexAddNewTasks == 0){
            let index = arrTody.length;
            let newItem =  {
                id: index + 1,
                subtitle: subtitleValue,
                title: titleValue
            }
            arrTody.push(newItem);
            subtitle.value ="";
            title.value = "";
            renderTodo(arrTody, indexAddNewTasks);
        }else{
            let index = arrInwork.length;
            let newItem =  {
                id: index + 1,
                subtitle: subtitleValue,
                title: titleValue
            }
            arrInwork.push(newItem);
            subtitle.value ="";
            title.value = "";
            renderTodo(arrInwork, indexAddNewTasks);
        }
        
    }

})


function renderTodo(arrItem,index){
    if(indexAddNewTasks == 0){
        let lis = todoMission.querySelectorAll('.todo .item-mission');
        for (let i = 0; i < lis.length; i++) {
            lis[i].remove();
        }
    }else if(indexAddNewTasks == 1){
        console.log(indexAddNewTasks);
        let lis = inWorkMission.querySelectorAll('.todo .item-mission');
        for (let i = 0; i < lis.length; i++) {
            lis[i].remove();
        }
    }
    
    arrItem.forEach(item=>{
        let itemMission = document.createElement('div');
        itemMission.classList.add('item-mission');
        itemMission.innerHTML = `
        <div class="content-mission">
        <div class="subtitle">
            <span>${item.subtitle}</span>
            <div class="images">
                <img src="../image/author-1.jpg" alt="">
            </div>
           
        </div>
        <p class="title">${item.title}</p>
        <div class="icons">
            <div class="icon bar">
                <i class="fa-solid fa-bars"></i>
                <span>4</span>
            </div>
            <div class="icon bar">
                <i class="fa-solid fa-paperclip"></i>
                <span>2</span>
            </div>
            <div class="icon bar">
                <i class="fa-solid fa-clock"></i>
                <span>6 day left</span>
            </div>
        </div>
        <div >
        </div>
    </div>
        `
        if(index == 0){
            todoMission.appendChild(itemMission);
        }else{
            inWorkMission.appendChild(itemMission);
        }
       
       
    })
}

renderTodo(arrTody,0);
renderTodo(arrInwork,1);


//infor user
let userBox = document.querySelector('.user-infor');
let items = document.querySelectorAll('.todo .item-mission');

items.forEach(item=>{
    item.addEventListener("click",function(){
        for(let i = 0 ;i < items.length; i++){
            items[i].classList.remove("active4");
        }
        item.classList.add("active4");
        // userBox.classList.add('active7');
        userBox.style.display = 'block';
        userBox.style.animation = 'OpenInfor ease-in 0.25s';
        let titleValue = item.querySelector('.content-mission .title').textContent;
        let subtitleVlue = document.querySelector('.subtitle span');

        let user_title = document.querySelector('.name-apps');
        user_title.textContent = titleValue;
        
    })
})

let closeUser = document.querySelector('#closeUser');
closeUser.addEventListener('click',function(e){
    userBox.style.animation = 'CloseInfor ease-in 0.25s forwards';
    items.forEach(item=>{
        item.classList.remove("active4");
    })
  
})

// box add new tasks
closeTask.addEventListener("click",function(){
    addTask.classList.remove("active3");
})

addNewTasks.forEach((addnewTask,index) => {
    addnewTask.addEventListener('click',function(e){
        indexAddNewTasks = index;
        addTask.classList.add('active3');
    })
})