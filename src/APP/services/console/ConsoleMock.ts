import { IConsole } from './IConsole';
import { EOL } from 'os';

export class ConsoleMock implements IConsole
{
    output = "";

    Write(text)
    {
        this.output += text;
    }

    WriteLine(text)
    {
        this.output += text + EOL;
    }
}