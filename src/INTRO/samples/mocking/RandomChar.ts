export function RandomChar()
{
    const charset = ['a','b','c','d','e'];
    const random = Math.floor(Math.random() * 4);

    return charset[random];
}