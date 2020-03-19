document.querySelectorAll("dt a").forEach(hyperlink=>
    hyperlink.onclick = function () {  
        const userId=hyperlink.dataset.id;
        leesUser()
    async function leesUser() {
        const response = await fetch("https://reqres.in/api/users?page=1&per_page=10");
        const nietGevondenDiv = document.getElementById("nietGevonden");
        if (response.ok) {
            let user = await response.json();
            user=user.data;     
            hyperlink.innerText="Naam"  
            document.getElementById(`user${userId}`).innerText = `${user[userId].first_name} ${user[userId].last_name}`;
            document.getElementById(`emailAdres${userId}`).innerText = user[userId].email;
            document.getElementById(`avatar${userId}`).src = user[userId].avatar;
            nietGevondenDiv.style.display = "";
        } else {
           nietGevondenDiv.style.display = "block";
            }
        } 

    }    )
