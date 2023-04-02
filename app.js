var i = document.getElementById('h');
i.value=0;

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

function c()
{
    i.value="0";
    r();
}

function hs()
{
    i.value=i.value.substr(0,i.value.lenght-1);
    r();
}

function h()
{
    i.value=eval(i.value);
}

function r()
{
    if(i.value=="")
    {
        i.value="0";
    }
}

