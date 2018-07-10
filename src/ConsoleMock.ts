import { IConsole } from './IConsole';
import { EOL } from 'os';

export class ConsoleMock implements IConsole
{
    public output = "";

    public Log(text: string): void
    {
        this.output += text + EOL;
    }
}