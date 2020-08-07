const cloneField = () => {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(field, () => {
        
    })
}

document.querySelector("#add-time").addEventListener('click', cloneField)