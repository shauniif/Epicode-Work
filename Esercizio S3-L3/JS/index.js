
window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}

const handleSubmit = function (e) {
    e.preventDefault();
    NewTask();
    LineTask("click",NewLi)
} 
var MyList;
var InsertList;
var NewLi;
var Newbtn;
var Delete;

function NewTask() {
    MyList = document.getElementById("MyList").value;
    NewLi = document.createElement("li");
    InsertList = document.getElementById("InsertList");
    NewLi.textContent = MyList;

    Newbtn = document.createElement("BUTTON");
    Delete = document.createTextNode("bin");
    Newbtn.appendChild(Delete);

    InsertList.appendChild(NewLi);
    InsertList.appendChild(Newbtn);
    
    LineTask("click", NewLi);
}


function LineTask() {
    for (let i = 0; i < InsertList.length; i++) {
        NewLi[i].addEventListener('click', function () {
          this.classList.toggle('toggle')
        })
      }
    }



function DeleteTask() {
}
