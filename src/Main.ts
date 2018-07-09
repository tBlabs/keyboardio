import * as fs from 'fs';
import { IRunMode } from './services/runMode/IRunMode';
import { RunMode } from './services/runMode/RunMode';
import { IEnvironment } from './services/environment/IEnvironment';
import { ILogger } from './services/logger/ILogger';
import { Logger } from './services/logger/Logger';
import { injectable, inject } from 'inversify';
import { Environment } from './services/environment/Environment';
import { Types } from './IoC/Types';
import * as readline from 'readline-sync';
import { read } from 'fs';

function Menu(title, items)
{
    console.log(title + ':');

    items.forEach((item, index) => 
    {
        console.log(`[${ index }] ${ item }`);
    });

    let pressedKey = readline.keyIn('', { mask: '', hideEchoBack: true });
    let pressedKeyAsInt = parseInt(pressedKey);

    return items[pressedKeyAsInt];
}

class LessonsStorage
{
    private lessons = [];

    constructor()
    {
        const lessonsAsString = fs.readFileSync('./src/lessons.json', 'utf8');
        this.lessons = JSON.parse(lessonsAsString);
    }

    get Titles()
    {
        return Object.keys(this.lessons);
    }

    GetByTitle(title)
    {
        return this.lessons[title];
    }
}
function Random(min, max)
{
    return Math.floor(Math.random() * (max-min) + min);
}
function LessonGenerator(config)
{
    let i=10;
    let out='';
    // console.log(config);
    let charsetSize = config.charset.length;
    while(i--)
    {
        const random  = Random(0, charsetSize);
       // console.log(random);
        out+=config.charset[random];
        if ((i%config.spaces)==0) out+=' ';
    }
   //. out +="^";

    return out.trim();
}

class Validator
{
    Compare(lesson, user)
    {
        let mistakes = 0;
        for (let i=0; i<lesson.length; i++)
        {
            if (lesson[i]!=user[i]) mistakes++;
        }
        return mistakes;
    }
}

@injectable()
export class Main
{
    public async Run(): Promise<void>
    {
        const lessonsStorage = new LessonsStorage();

        let work = true;
        while (work)
        switch (Menu('Main menu', ['load', 'quit']))
        {
            case 'load': 
                const selectedLessonConfig = Menu('Select lesson', lessonsStorage.Titles);
                const lessonConfig = lessonsStorage.GetByTitle(selectedLessonConfig);

                let userLine = '.';
                while (userLine.length !== 0)
                {
                let out = LessonGenerator(lessonConfig);
                console.log(out+'^');
                userLine = readline.question();
                const v = new Validator();
                console.log('mistakes: '+v.Compare(out, userLine));
                }
                break;
            case 'quit': 
                work=false;
                break;
        }
    }
}