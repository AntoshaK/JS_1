let text = prompt (`Enter text `);
let firstPos = 0;
let space = text.indexOf(` `, firstPos);
let resText = ``;

/*
сначала проверяем не пуста ли строка потом принудительно
 обрабатываем подстроку в которой после слов идут пробелы потом последнее слово отдельно
 */
if (text == ``) alert (`Text is Empty`);
else
{
    while (space != -1)
    {
        if (space - firstPos == 1)
        {
            firstPos = space + 1;
            space = text.indexOf(` `, firstPos);
        }
        else if ((space - firstPos) % 2 == 0)
        {
            resText += text.substring(firstPos, space + 1);
            firstPos = space + 1;
            space = text.indexOf(` `, firstPos);
        }
        else
        {
            let halfLength = (space - firstPos - 1) / 2;
            resText = resText + text.substr(firstPos, halfLength) + text.substr(firstPos + halfLength + 1, halfLength) + ` `;
            firstPos = space + 1;
            space = text.indexOf(` `, firstPos);
        }
    }
    //обработка последнего слова отдельно
    if ((text.length - firstPos) % 2 == 0)
    {
        resText += text.substring(firstPos, text.length);
    }
    else
    {
        let halfLength = (text.length - firstPos - 1) / 2;
        resText = resText + text.substr(firstPos, halfLength) + text.substr(firstPos + halfLength + 1, halfLength);
    }
    alert(resText);
}


