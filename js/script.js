const shareButton = document.querySelector('.profile-share-con');
const returnButton = document.querySelector('.profile-share-con-click');

const changeSection = (e) => {
    const hideSection = document.querySelector('.hide');
    const showSection = document.querySelector('.show');
    if (isMobile()) {
      
        
        hideSection.classList.remove('hide');
        hideSection.classList.add('show');
        showSection.classList.remove('show');
        showSection.classList.add('hide');
    } 



}

function isMobile() {
  const minWidth = 768; // Minimum width for desktop devices
  return window.innerWidth < minWidth || screen.width < minWidth;
}



shareButton.addEventListener("mouseenter", (e) => {
    const img = e.currentTarget.querySelector('#profile-svg');
    e.currentTarget.classList.add('profile-share-bg-change');
    img.classList.add('share-img');
    
})
shareButton.addEventListener("mouseleave", (e) => {
    const img = e.currentTarget.querySelector('#profile-svg');
    e.currentTarget.classList.remove('profile-share-bg-change');
    img.classList.remove('share-img');
    
})
returnButton.addEventListener("mouseenter", (e) => {
    const img = e.currentTarget.querySelector('#share-svg');
    e.currentTarget.classList.add('profile-share-con-bg-focus');   
    img.classList.remove('share-img');

})
returnButton.addEventListener("mouseleave", (e) => {
    const img = e.currentTarget.querySelector('#share-svg');
    e.currentTarget.classList.remove('profile-share-con-bg-focus');
    img.classList.add('share-img');
})

shareButton.addEventListener("click", changeSection);
returnButton.addEventListener('click', changeSection);


