

const wrapperGeneral=document.querySelector('.wrapperGeneral');
wrapperGeneral.classList.add("lessHeight")
window.addEventListener('load',()=>{
    const loader=document.querySelector('.loaderWrapper');

    setTimeout(()=>{
        loader.classList.add('hide');
        wrapperGeneral.classList.remove("lessHeight")
    },4000)
})

console.log('Mdau')
const imageParent=document.querySelector('.bigger');
const image=document.querySelector('.myImage');
imageParent.addEventListener('mouseover',(e)=>{
    image.src=`url(${images/smile.jpg})`;
})