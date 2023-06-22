const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.classList.toggle('red');
p.textContent = "Hey I'm red!"

container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.toggle('blue');
h3.textContent = "I'm a blue h3!"

container.appendChild(h3);

const containerDiv = document.createElement('div');
containerDiv.classList.toggle('container-div');

container.appendChild(containerDiv);