import { Keyboard } from './Keyboard';

export function Menu(items)
{
    console.log('--------------------------');

    items.forEach((item, index) => 
    {
        console.log(`[${ index }] ${ item }`);
    });

    process.stdout.write('> ');

    const keyboard = new Keyboard();
    let pressedKey = keyboard.GetOneKey();
    let pressedKeyAsInt = parseInt(pressedKey);

    console.log(pressedKey);

    return items[pressedKeyAsInt];
}

export function MenuDI(_console, _keyboard, title, items)
{
    _console.Log(title + ':');

    items.forEach((item, index) => 
    {
        _console.Log(`[${ index }] ${ item }`);
    });

    let pressedKey = _keyboard.GetOneKey();
    let pressedKeyAsInt = parseInt(pressedKey);

    return items[pressedKeyAsInt];
}

// class MenuBase
// {
//     protected items = [];

//     public Print()
//     {
//         this.items.forEach((item, index) => 
//         {
//             console.log(`[${ index }] ${ item }`);
//         });
//     }

//     public GetUserChoice()
//     {
//         let pressedKey = this._keyboard.GetOneKey();
//         let pressedKeyAsInt = parseInt(pressedKey);
//         return pressedKeyAsInt;
//     }
// }

// class MenuC extends MenuBase
// {
//     constructor(_output, _input, items)
//     {
//         super()
//     }
// }