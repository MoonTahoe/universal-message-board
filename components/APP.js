const asciiArt = `
8""8""8                                      8""""8
8  8  8 eeee eeeee eeeee eeeee eeeee eeee    8    8   eeeee eeeee eeeee  eeeee
8e 8  8 8    8   " 8   " 8   8 8   8 8       8eeee8ee 8  88 8   8 8   8  8   8
88 8  8 8eee 8eeee 8eeee 8eee8 8e    8eee    88     8 8   8 8eee8 8eee8e 8e  8
88 8  8 88      88    88 88  8 88 "8 88      88     8 8   8 88  8 88   8 88  8
88 8  8 88ee 8ee88 8ee88 88  8 88ee8 88ee    88eeeee8 8eee8 88  8 88   8 88ee8
`

const APP = () => <div>
    <pre>{asciiArt}</pre>
</div>

module.exports = APP

