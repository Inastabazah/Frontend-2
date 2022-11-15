let url = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  let fetchPromise = await fetch(url);
  let response = await fetchPromise;
  let json = await response.json();
  return json;
}

async function main() {
  try {
    let users = await fetchUsers();
    
  } catch (error) {}
}
main();

let mybtn= document.getElementById('btn')
mybtn.addEventListener ('click',mybtnOnclick)
    function mybtnOnclick(){
        console.log(fetchUsers())
    } 

