const shareButton = document.querySelector('.profile-share-con');
const returnButton = document.querySelector('.profile-share-con-click');

const changeSection = (e) => {
    const hideSection = document.querySelector('.hide');
    const showSection = document.querySelector('.show');

    
    hideSection.classList.remove('hide');
    hideSection.classList.add('show');
    showSection.classList.remove('show');
    showSection.classList.add('hide');



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

shareButton.addEventListener("click", changeSection);
returnButton.addEventListener('click', changeSection);


