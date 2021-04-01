let input = $("input[type=text]");
let feedback = $("#feedback")
let ul = $("#ul");

function normal() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item">
    ${input.val()}
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    </li>`)
    addDeleteFunction()
}

function titleName() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item">
    <hr>
    <h1 class="d-inline-block">${input.val()}</h1>
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    <hr>
    </li>`)
    addDeleteFunction()
}

function info() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item bg-info">
    <hr>
    ${input.val()}
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    <hr>
    </li>`)
    addDeleteFunction()
}

function caps() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item text-uppercase">
    ${input.val()}
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    </li>`)
    addDeleteFunction()
}

function warning() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item bg-warning">
    ${input.val()}
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    </li>`)
    addDeleteFunction()
}

function danger() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item fs-5 bg-danger text-light">
    ${input.val()}
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    </li>`)
    addDeleteFunction()
}

function ready() {
    if (input.val() == "") return warningError();
    warningValid()

    ul.append(`<li class="list-group-item bg-success text-light">
    ${input.val()}
    <button class="btnDelete btn-close float-end bg-danger" data-bs-dismiss="alert" aria-label="Close"></button>
    </li>`)
    addDeleteFunction()
}

function addDeleteFunction() {
    $(".btnDelete").click((e) => {
        let targetBtn = e.target;
        let target = targetBtn.parentElement;
        target.remove()
    })
}

function warningError() {
    input.removeClass("is-valid")
    input.addClass("is-invalid")

    feedback.css("display", "block")
    feedback.removeClass("valid-feedback")
    feedback.addClass("invalid-feedback")
    feedback.text("Escreva pelo menos uma letra")
}

function warningValid() {
    input.removeClass("is-invalid")
    input.addClass("is-valid")

    feedback.css("display", "block")
    feedback.removeClass("invalid-feedback")
    feedback.addClass("valid-feedback")
    feedback.text("Tudo certo")
}