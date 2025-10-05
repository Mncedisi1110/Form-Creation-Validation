async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        const dataContainer = document.getElementById("api-data")
        dataContainer.innerHTML="";
        const userList = <ul></ul>;
        
            

        
    }catch(Error){console.error(Error);}

}
