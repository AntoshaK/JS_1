let num = prompt(`Enter a number`);
let max1, max2;
if (!isFinite(num) || isNaN(parseFloat(num))) alert (`No numbers entered`);
else
{
    num = +num;
    max1 = num;
    num = prompt(`Enter a number`);
    if (!isFinite(num) || isNaN(parseFloat(num))) alert (`Only one number entered: ${max1}`);
    else
    {
        num = +num;
        if (max1 < num)
        {
            max2 = max1;
            max1 = num;
        }
        else max2 = num;
        while (true)
        {
            num = prompt(`Enter a number`);
            if (!isFinite(num) || isNaN(parseFloat(num))) break;
            else
            {
                num = +num;
                if (num > max1)
                {
                    max2 = max1;
                    max1 = num;
                }
                else if (num > max2)
                {
                    max2 = num;
                }
            }
        }
        alert (`First max number: ${max1} second max number: ${max2}`);

    }
}
