var i = document.getElementById('h');
r();

function l(y)
{
    if(i.value=="0")
    {
        i.value=y;
    }
    else
    {
        i.value+=y;
    }
}

function r()
{
    i.value="0";
}

function h()
{
    i.value=eval(i.value);
}

