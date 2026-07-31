let time=0;
switch(true)
{
    case(time>="00" && time<=12):
    console.log("good morning");
    break;
    case(time>=1 && time <=5):
    console.log("Afternoon");
}

for( let i=1; i<=5; i++)
{
    let toprint ="";
    for( let j=1; j<=5; j++)
        {
            toprint += j + "\t";
        }
        console.log(toprint)
}

for( let i=1; i<=5; i++)
    {
        let toprint ="";
        for( let j=1; j<=i; j++)
            {
                toprint += j + "\t";
            }
            console.log(toprint)
    }
    console.log()

    for( let i=5; i>=1; i--)
    {
        let toprint ="";
        for( let j=1; j<=i; j++)
            {
                toprint += j + "\t";
            }
            console.log(toprint)
    }

    for( let i=1; i<=5; i++)
    {
        let toprint ="";
        for( let j=1; j<=5; j++)
            {
                if(i<=2 || i>=4)
                toprint += j + "\t";
            }
            console.log(toprint)
    }