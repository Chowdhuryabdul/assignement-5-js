document.addEventListener('scroll', function(){
    const header = document.querySelector('header')
    if(window.scrollY >0 ){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
    }
})


// https://www.youtube.com/watch?v=gbmV2Lh9dBM&ab_channel=FabioMusanni-ProgrammingChannel 