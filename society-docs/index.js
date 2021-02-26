const markdownpdf = require('markdown-pdf');

const dist = './society-docs/dist/';
const readme = 'README.MD';

// TODO: make this dynamic so i don't have to add each one individually
const files = [
    { input: `./society-docs/bylaws/${readme}`, output: `${dist}bylaws.pdf` },
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
