let SideBarMenu = document.getElementById("container");
let Overlay = document.getElementById("overlay");

function openSideBarMenu(){
    container.classList.add("show");
    Overlay.classList.add("show");
}

function closeSideBarMenu(){
    container.classList.remove("show");
    Overlay.classList.remove("show");
}

let AddButton = document.getElementById("AddToTable_Button");
let table = document.querySelector(".main_table");
let RemoveButton = document.getElementById("RemoveFromTable_Button");

AddButton.addEventListener("click", addNewWord);
RemoveButton.addEventListener("click", RemoveWord);

function addNewWord() {
    closeSideBarMenu();

    setTimeout(() => { 
        let SpanishWord = prompt(`Напишите испанское слово в бланк снизу.`);

        if (!SpanishWord) {
            alert(`Не удалось добавить ваше слово.\nПопробуйте заново.`);
            return; 
        }

        let RussianWord = prompt(`Теперь напишите перевод к слову "${SpanishWord}" (на русском).`);

        if (!RussianWord) {
            alert(`Не удалось добавить ваше слово.\nПопробуйте заново.`);
            return; 
        }

        let newRow = table.insertRow(1);

        let cellNumber = newRow.insertCell(0);
        let cellSpanish = newRow.insertCell(1);
        let cellRussian = newRow.insertCell(2);

        cellNumber.textContent = "—";
        cellSpanish.textContent = SpanishWord;
        cellRussian.textContent = RussianWord;

        renumberTable();

        alert(`Слово "${SpanishWord}" с переводом "${RussianWord}" было успешно добавлено в начало списка.`);
    }, 500);
}


function renumberTable() {
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[0].textContent = i;
    }
}

function RemoveWord() {
    closeSideBarMenu();

    setTimeout(() => {
        let row = prompt("Напишите номерной порядок слова \n которого вы хотите удалить.");

        if (!row || isNaN(row)){
            alert(`Не удалось удалить ${row} строку. \n Попробуйте заново.`);
            return;
        }

        row = parseInt(row);

        if (row <= 0 || row >= table.rows.length) {
            alert("Такой строки не существует.");
            return;
        }

        table.deleteRow(row);

        renumberTable();

        alert(`Слово "${SpanishWord}" с переводом "${RussianWord}" было успешно удалены.`);
    }, 500);
}

