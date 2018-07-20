import { Menu, MenuDI } from "./Menu";
import { EOL } from 'os';
import { ConsoleMock } from "../../services/console/ConsoleMock";
import { KeyboardMock } from "../../services/keyboard/KeyboardMock";

describe('Menu()', () =>
{
    it('should print items', () =>
    {
        const console = new ConsoleMock();
        const keyboard = new KeyboardMock();

        MenuDI(console, keyboard, 'Menu', ['foo', 'bar']);

        expect(console.output).toBe('Menu:' + EOL + '[0] foo' + EOL + '[1] bar' + EOL);
    });

    it('should return first item when Zero key pressed', () =>
    {
        const console = new ConsoleMock();
        const keyboard = new KeyboardMock('0');

        let selectedItem = MenuDI(console, keyboard, 'Menu', ['foo', 'bar']);

        expect(selectedItem).toBe('foo');
    });
});