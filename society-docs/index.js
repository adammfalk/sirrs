import markdownpdf from 'markdown-pdf';
import fs from 'fs';

const dist = './dist/';
const readme = 'README.MD';

const files = [
    { input: `./bylaws/${readme}`, output: `${dist}bylaws.pdf` },
];

files.forEach(file => {
    createPdf(file.input, file.output);
});

function createPdf(src, out) {
    fs.createReadStream(src)
        .pipe(markdownpdf())
        .pipe(fs.createWriteStream(out));
}
