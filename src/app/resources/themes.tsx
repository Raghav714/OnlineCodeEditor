import { nord } from '@uiw/codemirror-theme-nord';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { quietlight } from '@uiw/codemirror-theme-quietlight';


interface ThemeMapType {
    [key: string]: any;
}

const ThemeMap: ThemeMapType = {
    'nord': nord,
    'vscode': vscodeDark,
    'tokyoNightStorm': tokyoNightStorm,
    'sublime': sublime,
    'quietlight': quietlight
}

export default ThemeMap;
