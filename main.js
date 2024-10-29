document.querySelector('button').addEventListener('click', getResident)

function getResident(){
    const resident = document.querySelector('input').value
    const url = `/api/${resident}`
    fetch(url) // get request from client to the server 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#age').innerText = data.age
        document.querySelector('#job').innerText = data.job
        document.querySelector('#favFood').innerText = data.favFood
    })
    console.log(resident)
}
