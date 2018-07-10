import { Keyboard } from './Keyboard';
import * as fs from 'fs';
import * as readline from 'readline-sync';
import { Menu } from './Menu';

export class LessonsStorage
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
    return Math.floor(Math.random() * (max - min) + min);
}
function GenerateLesson(config)
{
    let i = 10;
    let out = '';
    // console.log(config);
    let charsetSize = config.charset.length;
    while (i--)
    {
        const random = Random(0, charsetSize);
        // console.log(random);
        out += config.charset[random];
        if ((i % config.spaces) == 0) out += ' ';
    }
    //. out +="^";

    return out.trim();
}

class Validator
{
    CountMistakes(lesson, user)
    {
        let mistakes = 0;
        for (let i = 0; i < lesson.length; i++)
        {
            if (lesson[i] != user[i]) mistakes++;
        }
        return mistakes;
    }
}

export class Main
{
    public async Run(): Promise<void>
    {
        const lessonsStorage = new LessonsStorage();
        const keyboard = new Keyboard();
        const validator = new Validator();

        let work = true;
        while (work)
            switch (Menu('Main menu', ['load', 'quit']))
            {
                case 'load':
                    const selectedLessonConfig = Menu('Select lesson', lessonsStorage.Titles);
                    const lessonConfig = lessonsStorage.GetByTitle(selectedLessonConfig);

                    let userInput = '.';
                    while (userInput.length !== 0)
                    {
                        let lessonText = GenerateLesson(lessonConfig);
                        console.log(lessonText + '|');
                        userInput = keyboard.GetLine();
                        let mistakes = validator.CountMistakes(lessonText, userInput);

                        console.log('Mistakes: ' + mistakes + '; Hit ENTER to exit or try again with this line:');
                    }
                    break;

                case 'quit':
                    work = false;
                    break;
            }
    }
}