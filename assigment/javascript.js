const menu= document.getElementsByClassName('demo')[0]

function addaiatemataolist(number){
 
    for(let i=1;i<=number;i++){
        let li=document.createElement('li')
        li.textContent= i+"item" 
        menu.appendChild(li);
    }

}
addaiatemataolist(10)



