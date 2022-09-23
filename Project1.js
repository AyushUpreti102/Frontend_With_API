let root = document.getElementById("root");
console.log(root);

let data = fetch("https://api.github.com/users").then(data=>{
    data.json().then(extracted_data=>{
        //console.log(extracted_data);
        for(value of extracted_data){
            console.log(value.login);
            console.log(value.avatar_url);
            root.innerHTML += `
            <div class="card">
                <img src="${value.avatar_url}"></img>
                <div class="info">
                <h2>${value.login}</h2>
                <div id="profile"> <a href="${value.html_url}" target="_blank"> Profile <a> </div>
            </div>
            `
        }
    })
})