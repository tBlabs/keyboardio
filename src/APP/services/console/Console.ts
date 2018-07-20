import { IConsole } from "./IConsole";

export class Console implements IConsole
{
    Write(text)
    {
        process.stdout.write(text);
    }

    WriteLine(text)
    {
        console.log(text);
    }
}