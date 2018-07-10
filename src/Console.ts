import { IConsole } from "./IConsole";

export class Console implements IConsole
{
    public Log(text: string): void
    {
        console.log(text);
    }
}