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

shareButton.addEventListener("click", changeSection);
returnButton.addEventListener('click', changeSection);