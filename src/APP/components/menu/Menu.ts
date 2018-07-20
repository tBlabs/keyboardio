import { Keyboard } from "../../services/keyboard/Keyboard";

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
    _console.WriteLine(title + ':');

    items.forEach((item, index) => 
    {
        _console.WriteLine(`[${ index }] ${ item }`);
    });

    let pressedKey = _keyboard.GetOneKey();
    let pressedKeyAsInt = parseInt(pressedKey);

    return items[pressedKeyAsInt];
}
