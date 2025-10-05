async function fetchUserData() {
    const apiurl = 'https://jsonplaceholder.typicode.com/users'
    try{
        const response = await fetch(apiurl);
        const users = await response.json();
        const dataContainer = document.getElementById("api-data")
        dataContainer.innerHTML="";
        const userList = <ul></ul>;
        
            

        
    }catch(Error){console.error(Error);}

}
