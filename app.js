



const createNode = (elem) => {
    return document.createElement(elem);

};

const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}




const ul = document.querySelector('#users')

const url = 'https://api.github.com/users'





/* // call the fetch
fetch('http://www.omdbapi.com/?apikey=[73151e86]&')
.then(res => res.json())
.then(data => console.log(data)); */


fetch(url)
.then(res => res.json())
.then(data => {

    data.map((user) => {

        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span')
        img.src = user.avatar_url;
        span.innerText = user.login;

        appendNode(li, img);
        appendNode(li, span);
        appendNode(ul, li);
    })



}).catch(err => {
    console.error('Error: ', err);
});














/* async function getData() 
{
    let response = await fetch('https://api.github.com/users')

    let data = await response.json()

    return data;

}


getData()
.then(data => console.log(data)); */