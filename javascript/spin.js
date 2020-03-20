const btn = document.getElementById('button');
const wheel = document.getElementById('wheel');


btn.addEventListener('click', () => {
     wheel.classList.toggle('active');
     setTimeout(() => {
          window.location.pathname = '../Subpages/you_lose.html';
     }, 2000)
})