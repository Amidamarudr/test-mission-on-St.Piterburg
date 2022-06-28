'use srtict'
// Массив данных
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
// Вытаскиваю массив из объекта
let newCourses = []

courses.forEach(elem => {
    newCourses.push(elem.prices);
});

console.table(newCourses);

console.log('Отступ от предыдущего console.log'); /* Для удобства просмотра консоли */

// Объединяю через Spread все цены в единый массив

let allNewCourses = [
    ...newCourses[0],
    ...newCourses[1],
    ...newCourses[2],
    ...newCourses[3],
    ...newCourses[4],
    ...newCourses[5],
    ...newCourses[6],
    ...newCourses[7]];

console.log(allNewCourses); 

console.log('Отступ от предыдущего console.log'); /* Для удобства просмотра консоли */

// Функции фильтрации

let filtredCourses1 = allNewCourses.filter(function(elem) {
    if (elem < 200) {
        return elem;
    }
})

console.log('Фильтрация до 200: ', filtredCourses1);

let filtredCourses2 = allNewCourses.filter(function(elem) {
    if (elem < 350 && elem > 100) {
        return elem;
    }
})

console.log('Фильтрация от 100 до 350: ', filtredCourses2);

let filtredCourses3 = allNewCourses.filter(function(elem) {
    if (elem > 200) {
        return elem;
    }
})

console.log('Фильтрация от 200: ', filtredCourses3);