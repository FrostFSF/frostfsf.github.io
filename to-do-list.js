function addFunc(element) {
    const textField = element.previousElementSibling;
    const textFieldValue = textField.value;
    const ulElement = document.querySelector('.myList');
    
    if(textFieldValue === '')
    {
        const alertPopUp = element.parentElement.parentElement.parentElement.nextElementSibling;
        alertPopUp.classList.remove('inactive');
    }
    else {
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
        if(ulElement.parentElement.classList.contains('inactive'))
        {
            ulElement.parentElement.classList.remove('inactive');
        }
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
    const ulElement = document.querySelector('.myList');
    
    setTimeout(() => {
        listElement.remove();
        if(ulElement.childElementCount === 0)
        {
            console.log(ulElement.childElementCount);
            ulElement.parentElement.classList.add('inactive');
        }
    }, 250);
}

function closePopUp(element) {
    const alertContainer = element.parentElement.parentElement;
    alertContainer.classList.add('inactive');
}