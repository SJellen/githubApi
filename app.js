

const createNode = (elem) => {
    return document.createElement(elem);

};

const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}


const ul = document.querySelector('#users')

const url = 'https://api.github.com/users'




fetch(url)
.then(res => res.json())
.then(data => {

    data.map((user) => {

        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span'),
        a = createNode('a')
        img.src = user.avatar_url;
        a.innerText = user.login;
        a.href = user.html_url;
        

        appendNode(li, img);
        appendNode(li, a);
        appendNode(ul, li);
    })



}).catch(err => {
    console.error('Error: ', err);
});










