let n = prompt(`Enter n for number of lines `);
if (isNaN(parseFloat(n))  || !Number.isInteger(Number(n)) || n <= 2 || n >= 15)
{
    alert(`Wrong input ${n}`);
}
else
{
    let size = 100;
    let html = ``;
    for (let i = 0; i < n; i++)
    {
        html += `<hr width=${size}%>`;
        size -= Math.floor(100 / n);
    }
    document.write(html);

    ///////////////////таблица
    html = `<table border="1" align="center" width="300px" height = "300px">`;
    for (let i = 0; i < Math.floor(n / 2); i++)
    {
        html += '<tr>';
        for(let j = 0; j < Math.floor(n / 2); j++)
        {
            html += `<td class="white"></td>`;
        }
        for(let j = Math.floor(n / 2); j < n; j++)
        {
            if (i + j <= n - 1) html += `<td class="black"></td>`;
            else html += `<td class="white"></td>`;
        }
        html += '</tr>';
    }
    for (let i = Math.floor(n / 2); i < n; i++)
    {
        html += '<tr>';
        for(let j = 0; j < Math.floor(n / 2); j++)
        {
            if (i + j <= n - 1) html += `<td class="black"></td>`;
            else html += `<td class="white"></td>`;
        }
        for(let j = Math.floor(n / 2); j < n; j++)
        {
            if (i == j) html += `<td class="black"></td>`;
            else html += `<td class="white"></td>`;
        }
        html += '</tr>';
    }
    html += `</table>`;
    document.write(html);
    ///////////////////////таблица


    html = ``;
    size = Math.floor(100 / n);
    for (let i = 0; i < n; i++)
    {
        html += `<hr width=${size}%>`;
        size += Math.floor(100 / n);
    }
    document.write(html);
}







