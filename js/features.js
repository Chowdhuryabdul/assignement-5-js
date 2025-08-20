document.getElementById('donation-btn-show').addEventListener('click', function(){
    showSactionById('donation-form');
})
document.getElementById('history-btn-show').addEventListener('click', function(){
    showSactionById('history-section')
})


// this is for the time in the history section 
const cNoakhali = document.querySelector('.empty-container-noakhali');
const cFeni = document.querySelector('.empty-container-feni');
const cQuota = document.querySelector('.empty-container-quota');

function makeStamp(){
    const p = document.createElement('p');
    p.textContent = formatDateTimeWithTimezone(new Date());
    p.style.cssText = 'color: red; background-color: yellow; width:fit-content; margin-bottom: 1rem;'
    return p
}

function showStampIn(container){
    container.replaceChildren(makeStamp());
}

const btnNoakhali = document.getElementById('donate__btn-flood-noakhali');
const btnFeni     = document.getElementById('donate__btn-flood-feni');
const btnQuota    = document.getElementById('donate__btn-quota-movement');

btnNoakhali.addEventListener('click', (e) => {
    e.preventDefault()
    showStampIn(cNoakhali)
})

btnFeni.addEventListener('click', (e) => {
    e.preventDefault()
    showStampIn(cFeni)
})

btnQuota.addEventListener('click', (e) => {
    e.preventDefault();
    showStampIn(cQuota)
})

// to redirect to the blog page 

document.getElementById('blog__btn').addEventListener('click', function(event){
// location.replace('./blog.html')
window.open('index.html', '_blank')
})

