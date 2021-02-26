const markdownpdf = require('markdown-pdf');

const dist = './dist/';
const readme = 'README.MD';

const files = [
    { input: `./bylaws/${readme}`, output: `${dist}bylaws.pdf` },
];

files.forEach(file => {
    createPdf(file.input, file.output);
});

function createPdf(src, out) {
    markdownpdf({
        cssPath: './style.css',
        remarkable: {
            //linkify: true,
        }
    })
        .from(src)
        .to(out, function () {
            console.log(`created ${out}`);
        });
}
