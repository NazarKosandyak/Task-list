debugger
let f1 = document.forms.f1

const GET_LIST = document.querySelector('.cont')

f1.btn.addEventListener("click", function () {

    let c = f1.choice.value
    let divka = document.createElement('div')
    let checkb = document.createElement('input')
    let mySpan = document.createElement('span')

    if (!c) {
        alert('Пусте поле не можна добавити')
    } else if (c.length <= 2) {
        alert("Що це за таск такий?\nВведіть правильно")
    } else {


        GET_LIST.append(divka)
        divka.className = 'all'

        checkb.type = 'checkbox'
        checkb.name = 'conn'
        checkb.className = 'conn1'
        divka.append(checkb)

        f1.reset()
        checkb.after(c)


        let GET_CHECK = document.querySelectorAll('.all')
        let CONT = document.querySelectorAll('.all')



        for (let i = 0; i < GET_CHECK.length; i++) {
            GET_CHECK[i].addEventListener("click", function () {
                if (myLen > 1 && myLen != 1) {
                    GET_CHECK[i].remove()
                    myLen--

                }
                if (GET_CHECK.length == 1) {
                    checkb.checked = false 
                    let getModal = document.querySelector('.modal')
                    getModal.style.display = 'block'

                    let getClose = document.querySelector('.close')
                    getClose.addEventListener('click', function () {
                        getModal.style.display = 'none'
                    })

                }
            })
        }

        let myLen = GET_CHECK.length
        console.log(myLen);

    }


})