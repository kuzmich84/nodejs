const fs = require(`fs`);
const path = require(`path`);

//Работа с файлами

//Создает папку

// fs.mkdir(path.join(__dirname, `notes`), (err) => {
//    if (err) throw err;
//
//    console.log(`Папка была создана`);
//
// });


//Создает файлы

// fs.writeFile(path.join(__dirname, `notes`, `mynotes.txt`),
//     `Hello, Dima!!!`, //контент
//     (err) => {
//         if (err) throw err;
//         console.log(`Файл был создан`);
//         fs.appendFile(                                      //Добавляет к уже имеющейся записи в файле
//             path.join(__dirname, `notes`, `mynotes.txt`),
//             `From append file `,
//             (err) => {
//                 if (err) throw err;
//                 console.log(`Файл был изменен`);
//                 fs.readFile(                                            //Читает данные в файле
//                     path.join(__dirname, `notes`, `mynotes.txt`),
//                     `utf-8`,
//                     (err, data) => {
//                         if (err) throw err;
//                         console.log(data);
//                     }
//                 );
//             }
//             )
//     }
// );

fs.rename(
    path.join(__dirname, `notes`, `mynotes.txt`),
    path.join(__dirname, `notes`, `notes`),
    err => {
        if(err) throw err;
        console.log(`Файл переименован`);
    }
);



