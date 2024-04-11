
window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}

const handleSubmit = function (e) {
    e.preventDefault();
    NewTask();
    LineTask();
    DeleteTask();
} 
var MyList;
var InsertList;
var NewLi;
var Newbtn;
var Delete;

function NewTask() {
        let inputIns = document.querySelector("#MyList");
        let AllList = document.querySelector('.AllList');
        let SingleList = `
        <div>
            <ul class="AlltheLi">
                <li >
                ${inputIns.value}
                </li>
            </ul>
            <button class="delete">
            <i class="far fa-trash-alt"></i>
            </button>
            </div>
            `
 AllList.innerHTML += SingleList;
    inputIns.value = '';
}


function LineTask() {
    let InsertList = document.querySelectorAll(".AlltheLi");
    for (let i = 0; i < InsertList.length; i++) {
        let OneList = InsertList[i]; 
        OneList.addEventListener('click', function () {
            OneList.classList.toggle('modifyText');
        })
      }
    }





    
function DeleteTask() {
    let Delete = document.querySelectorAll(".delete");
    for (let i = 0; i < Delete.length; i++) {
        let OneDelete = Delete[i]; 
        OneDelete.addEventListener('click', function () {
            OneDelete.parentNode.remove();
        })
      }
    }

