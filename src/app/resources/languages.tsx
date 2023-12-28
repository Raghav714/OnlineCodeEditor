const Languages: string[] = ['python', 'java', 'cpp']

const LanguageMap: { [key: string]: string } = {
    'py': 'python',
    'cpp': 'cpp',
    'java': 'java'
}


type Theme = {
    color: string;
    border: string;
};
const LanguageThemeMap: { [key: string]: Theme } = {
    'python': {
        color: '#668966',
        border: '1px solid #668966'
    },
    'java': {
        color: '#c67777',
        border: '1px solid #c67777'
    },
    'cpp': {
        color: '#8493c9',
        border: '1px solid #8493c9'
    },
}


export { Languages, LanguageMap, LanguageThemeMap }
