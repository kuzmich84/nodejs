// Operation System
const os = require(`os`)

// Определяет ОС
console.log('Операционная система: ', os.platform())

// Архитектура
console.log('Архитектура: ', os.arch())

// Информация
console.log('Информация о CPU: ', os.cpus())

// Свободная память
console.log('Свободная память: ', os.freemem())

// Свободная память
console.log(os.totalmem())

// Корневая директория на ПК
console.log('Корневая директория на ПК: ', os.homedir())

// Сколько система работает

console.log('Время работы ОС: ', (os.uptime()/ 60/60).toFixed(1) + ' часов')
