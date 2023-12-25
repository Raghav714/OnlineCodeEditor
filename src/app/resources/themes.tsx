import { nord, defaultSettingsNord, nordInit } from '@uiw/codemirror-theme-nord';
import { vscodeDark, defaultSettingsVscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { tokyoNightStorm, defaultSettingsTokyoNightStorm, tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import { sublime, defaultSettingsSublime, sublimeInit } from '@uiw/codemirror-theme-sublime';
import { quietlight, defaultSettingsQuietlight, quietlightInit } from '@uiw/codemirror-theme-quietlight';


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

const ThemeColorMap: ThemeMapType = {
    'nord': nordInit(),
    'vscode': vscodeDarkInit(),
    'tokyoNightStorm': tokyoNightStormInit(),
    'sublime': sublimeInit(),
    'quietlight': quietlightInit(),
}

export { ThemeMap, ThemeBackgroundMap, ThemeColorMap };

