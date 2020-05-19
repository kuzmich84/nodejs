const path = require(`path`);

console.log(path.basename(__filename)); //указывает на имя файла с расширением
console.log(path.dirname(__filename)); //содержит путь до файла
console.log(path.extname(__filename)); // содкржит расширение файла

console.log(path.parse(__filename)); // сожержит объект

console.log(path.join(__dirname, `test`, `second.html`)); // генерирует путь
console.log(path.resolve(__dirname, `./test`, `/second.html`));
