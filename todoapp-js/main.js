
document.querySelector('#push').onclick = function(){
    if(document.querySelector('.custom-gr').value.length==0){
        alert("Xetali giris cehdi")
    }
    else{
        document.querySelector('#myList').innerHTML+=`<div class="myList">
        <span id="myList">
        ${document.querySelector('.custom-gr').value}</span></div>`;

        
        let tasks = document.querySelectorAll('#myList');
        for (let i = 0; i < tasks.length; i++) {
           tasks[i].onclick = function(){
               this.classList.toggle('successful')
           }

        }
        document.get('').onclick = function() {
         document.write(" worker")
        }
        document.querySelector('.custom-gr').value= "";
    }
}


// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Please Enter a Task")
//     }

//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;
//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }
// if(document.querySelector('#newtask input').value.length == 0){
//     alert("Please Enter a Task")
// }
// else{
//     document.querySelector('#tasks').innerHTML += `
//         <div class="task">
//             <span id="taskname">
//                 ${document.querySelector('#newtask input').value}
//             </span>
//             <button class="delete">
//                 <i class="far fa-trash-alt"></i>
//             </button>
//         </div>
//     `;
//     var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }}