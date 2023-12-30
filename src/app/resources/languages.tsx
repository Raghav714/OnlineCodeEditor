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

const LanguageDefaultCode: { [key: string]: string } = {
    'java': '\nclass Main {\n\tpublic static void main(String[] args){\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}\n',
    'cpp': '#include <iostream>\n\nint main() {\n\tstd:: cout << "HelloWorld" << std:: endl;\n\treturn 0;\n}\n',
    'python': ''
}


export { Languages, LanguageMap, LanguageThemeMap, LanguageDefaultCode }
