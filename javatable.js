let url = "https://jsonplaceholder.typicode.com/users";
let usersAraay=[];
async function fetchUsers() {
  let fetchPromise = await fetch(url);
  let response = await fetchPromise;
  let json = await response.json();
  return json;
}

async function main() {
  try {
    let users = await fetchUsers();
    console.log(users);
    usersAraay=users
    addTable(usersAraay)
    
   

  } catch (error) {}
}
main();
console.log(usersAraay)



function addTable(usersAraay){
    let col=["Name","Email","Steet","City","Phone"];
   const table=document.createElement("table");
   document.body.appendChild(table)
   table.border='1';
   let tr=table.insertRow(-1);
    for(let i=0;i<col.length;i++){
        let th=document.createElement("th")
        th.innerHTML=col[i];
        tr.appendChild(th)
    }


    for(let i=0;i<usersAraay.length;i++){
        tr=table.insertRow(-1);
        let tblcell1=tr.insertCell(-1);
        let tblcell2=tr.insertCell(-1);
        let tblcell3=tr.insertCell(-1);
        let tblcell4=tr.insertCell(-1);
        let tblcell5=tr.insertCell(-1);
        tblcell1.innerHTML=usersAraay[i].name;
        tblcell2.innerHTML=usersAraay[i].email;
        tblcell3.innerHTML=usersAraay[i].address.street;
        tblcell4.innerHTML=usersAraay[i].address.city;
        tblcell5.innerHTML=usersAraay[i].phone;

    }

}
