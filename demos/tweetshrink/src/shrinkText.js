export const textOptions = [
    {
        id: 'ampersand',
        label: 'Replace "and" with ampersand',
        fn: text => text.replace(/\band\b/, "&")
    },
    {
        id: 'with',
        label: 'Replace "with" with "w/"',
        fn: text => text.replace(/\bwith\b/, 'w/')
    },
    {
        id: 'because',
        label: 'Replace "because" with "b/c"',
        fn: text => text.replace(/\bbecause\b/, 'b/c')
    },
    {
        id: "oxford",
        label: "Eliminate Oxford commas",
        fn: text => text.replace(/,\s+(and|&)\s+/, " $1 ")
    },
    {
        id: "finalpunc",
        label: "Eliminate final punctuation",
        fn: text => text.replace(/[.!?]$/, '')
    }
];

const shrinkText = (text, options) => {
    if (!text) {
        return "";
    }

    let opObj;
    options.forEach(option => {
        opObj = textOptions.find(o => o.id === option)
        if (opObj) {
            text = opObj.fn(text)
        }
    })

    return text;
}

export default shrinkText;
