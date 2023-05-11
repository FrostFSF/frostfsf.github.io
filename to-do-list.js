function addFunc(element) {
    const textField = element.previousElementSibling;
    const textFieldValue = textField.value;
    
    if(textFieldValue === '')
    {
        const alertPopUp = element.parentElement.parentElement.parentElement.nextElementSibling;
        alertPopUp.classList.remove('inactive');
    }
    else {
        const ulElement = document.querySelector('.myList');
        const listElement = document.createElement('li');
        const checkList = document.createElement('i');
        const deleteIcon = document.createElement('i');
        const iconDiv = document.createElement('div')

        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-trash');
        deleteIcon.setAttribute("onclick","deleteThisList(this)");
        checkList.classList.add('fa-solid');
        checkList.classList.add('fa-circle-check');
        checkList.setAttribute("onclick","checkThisList(this)");

        iconDiv.appendChild(checkList);
        iconDiv.appendChild(deleteIcon);

        listElement.innerText = textFieldValue;
        listElement.classList.add('slide-right');
        listElement.appendChild(iconDiv);
        
        ulElement.append(listElement);

        textField.value = "";
    }
}

function checkThisList(element) {
    const listElement = element.parentElement.parentElement;
    listElement.classList.add('checked');
    element.classList.add('inactive')
}

function deleteThisList(element) {
    const listElement = element.parentElement.parentElement;
    listElement.classList.remove('slide-right');
    listElement.classList.remove('checked');
    listElement.classList.add('delete-poof');
    setTimeout(() => {
        listElement.remove();
    }, 250);
}

function closePopUp(element) {
    const alertContainer = element.parentElement.parentElement;
    alertContainer.classList.add('inactive');
}