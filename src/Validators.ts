export function NameValidator(name)
{
    if (name === null) return false;
    if (name === undefined) return false;
    if (typeof(name)!=="string") return false;
    // if (!(name instanceof String)) return false;
    name = name.trim();    
    if (name.length == 0) return false;
    // name.replace(/[ ]+/, ' ');
    // if (!name.includes(' ')) return false;
    // if (name[0].) 

    return true;
}

function PhoneNumberValidator(number)
{

}