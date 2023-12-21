import { nord, defaultSettingsNord } from '@uiw/codemirror-theme-nord';
import { vscodeDark, defaultSettingsVscodeDark } from '@uiw/codemirror-theme-vscode';
import { tokyoNightStorm, defaultSettingsTokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { sublime, defaultSettingsSublime } from '@uiw/codemirror-theme-sublime';
import { quietlight, defaultSettingsQuietlight } from '@uiw/codemirror-theme-quietlight';


interface ThemeMapType {
    [key: string]: any;
}

const ThemeMap: ThemeMapType = {
    'nord': nord,
    'vscode': vscodeDark,
    'tokyoNightStorm': tokyoNightStorm,
    'sublime': sublime,
    'quietlight': quietlight,
}

const ThemeBackgroundMap: ThemeMapType = {
    'nord': defaultSettingsNord,
    'vscode': defaultSettingsVscodeDark,
    'tokyoNightStorm': defaultSettingsTokyoNightStorm,
    'sublime': defaultSettingsSublime,
    'quietlight': defaultSettingsQuietlight,
}

export { ThemeMap, ThemeBackgroundMap };

