import { Keyboard } from './services/keyboard/Keyboard';
import { Validate } from './services/validator/Validate';
import { Menu } from './components/menu/Menu';
import { LessonsStorage } from './services/storage/LessonsStorage';
import { LessonGenerator } from './services/lessonGenerator/GenerateLesson';

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
        const lessonText = LessonGenerator.Generate(config);
        console.log('  ' + lessonText);
        process.stdout.write('> ');
        const keyboard = new Keyboard();
        const userInput = keyboard.GetLine();
        const mistakes = Validate(lessonText, userInput);
        console.log('Mistakes: ' + mistakes);
    }

    LessonExecutorDI(_console, _keyboard, _generator, config)
    {
        // Split into 2 modules: LessonPrinter, UserTraining
        const lessonText = _generator.Generate(config);
        _console.WriteLine('  ' + lessonText);
        _console.Write('> ');
        const userInput = _keyboard.GetLine(); 
        const mistakes = Validate(lessonText, userInput);
        _console.Write('Mistakes: ' + mistakes);
    }
}