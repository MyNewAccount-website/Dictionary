let AddButton = document.getElementById("AddToTable_Button");
let table = document.querySelector(".main_table");
let RemoveButton = document.querySelector(".RemoveFromTable_Button");

AddButton.addEventListener("click", addNewWord);
RemoveButton.addEventListener("click", RemoveWord);

function addNewWord() {
    let SpanishWord = prompt(`Напишите испанское слово в бланк снизу.`);
    
    if (!SpanishWord) {
        alert(`Не удалось добавить ваше слово.\nПопробуйте заново.`);
        return; 
    }

    let RussianWord = prompt(`Теперь напишите перевод к слову "${SpanishWord}" (на русском).`);

    if (!SpanishWord || !RussianWord) {
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
}

function renumberTable() {
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[0].textContent = i;
    }
}

function RemoveWord() {
    
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
}

