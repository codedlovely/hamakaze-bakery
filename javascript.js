// expand or contract FAQ item
const curFaq = document.querySelectorAll('.question');
function toggle() {
    const curAnswer = this.nextElementSibling;
    this.classList.toggle('active');
    curAnswer.classList.toggle('open');
}
for (let i=0; i<curFaq.length; i++) {
    curFaq[i].addEventListener('click', toggle);
}