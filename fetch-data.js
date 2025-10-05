const fetchUserData = async () => {
    const apiurl = 'https://jsonplaceholder.typicode.com/users';
    try{
        const response = await fetch(apiurl);
        const users = await response.json();
        const dataContainer = document.getElementById("api-data")
        dataContainer.innerHTML="";
        const userList = <ul></ul>;
        users.array.forEach(userList => {
            const list = <li></li>;
            list.textcon

        });
    }

}
