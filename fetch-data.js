async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        const dataContainer = document.getElementById("api-data")
        dataContainer.innerHTML="";
        const userList = document.createElement(<ul></ul>);
 const list = users.forEach(document.createElement(<li></li>) );
       userList.appendChild(list);
       dataContainer.appendChild(userList);
    
 }catch(Error){console.error(Error);}
}fetchUserData()

