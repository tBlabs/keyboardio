import { Keyboard } from './Keyboard';
import { Validate } from './Validate';
import { Menu } from './Menu';
import { LessonsStorage } from './LessonsStorage';
import { LessonGenerator } from './GenerateLesson';

export class Main
{
    public Start()
    {
        while (true)
        {
            switch (Menu(['play', 'exit']))
            {
                case 'play': this.Play();
                    break;
    
                case 'exit': return;
            }
        }
    }

    Play()
    {
        const selectedLesson = this.SelectLesson();
        this.LessonExecutor(selectedLesson);
    }

    SelectLesson()
    {
        const store = new LessonsStorage();
        const selected = Menu(store.Titles);
        return store.GetByTitle(selected);
    }

    LessonExecutor(config)
    {
        const lessonText = LessonGenerator(config);
        console.log(lessonText);
        const keyboard = new Keyboard();
        const userInput = keyboard.GetLine();
        const mistakes = Validate(lessonText, userInput);
        console.log('Mistakes: ' + mistakes);
    }
}