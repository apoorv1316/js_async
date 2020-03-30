// Your code goes here
document.querySelector('.btn').addEventListener('click', searchUser);

function searchUser(e){
    let input= document.querySelector('input').value;
    function getUser (user){
        document.querySelector('.user_img').src= user.avatar_url;
        document.querySelector('.name').innerText=`Name: ${user.name}` 
        document.querySelector('.id').innerText=`Id: ${user.id}` 
        document.querySelector('.bio').innerText=`Bio: ${user.bio}` 
    }
    let xhr= new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${input}`,true);
    xhr.onload = function(){
        if(this.status===200){
            console.log(JSON.parse(xhr.response));
            const response= JSON.parse(this.response);
            getUser(response)
        }
    }
    xhr.send()
    e.preventDefault()
}

