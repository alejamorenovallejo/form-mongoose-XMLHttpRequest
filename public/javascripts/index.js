//with XMLHttpRequest
document.getElementById('register').addEventListener("submit", function(evt) {
    evt.preventDefault();
    const xhr = new XMLHttpRequest();
    const url = '/login';

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = JSON.stringify({
            userGithub: document.getElementById('user-github').value,
            email : document.getElementById('passcode').value
        });
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if(this.readyState == 4  && this.status==200) {
            const users = JSON.parse(this.responseText);
            const hidden = document.querySelector('div.row');
            const tbody = document.querySelector('tbody');
            tbody.innerHTML = '';
                for(let user of users){
                    tbody.innerHTML +=`
                        <tr>
                        <td class="text-center">${user.userGithub}</td>
                        <td class="text-center">${user.email}</td>
                        </tr>`
                }
            hidden.classList.remove("hidden");
            document.getElementById('user-github').value = '';
            document.getElementById('passcode').value = ''
        }
    }
});
