import { Keyboard } from './Keyboard';

export function Menu(title, items)
{
    console.log(title + ':');

    items.forEach((item, index) => 
    {
        console.log(`[${ index }] ${ item }`);
    });

    const keyboard = new Keyboard();
    let pressedKey = keyboard.GetOneKey();
    let pressedKeyAsInt = parseInt(pressedKey);

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