const achivmentsMock = [
    {
    id: 0,
    type: 'timeAchivments',
    config: {
    bronze: {
    isActive: false,
    isDone: true,
    name: 'Bronze',
    descriptionNotActive: 'Тренируйтесь 1 час',
    restDate: '2:00', 
    progress: {
    currentPosition: 3,
    maxPosition: 5,
    },
    },
    silver: {
    isActive: false,
    isDone: true,
    name: 'Silver',
    descriptionNotActive: 'Тренируйтесь 3 часа',
    restDate: '', 
    progress: {
    currentPosition: 1,
    maxPosition: 15,
    },
    },
    gold: {
    isActive: true,
    isDone: true,
    name: 'Gold',
    descriptionNotActive: 'Тренируйтесь 5 часов',
    restDate: '', 
    progress: {
    currentPosition: 24,
    maxPosition: 25,
    },
    },
    },
    },
    {
    id: 1,
    type: 'traningAchivments',
    config: {
    bronze: {
    isActive: true,
    isDone: false,
    name: 'Bronze',
    descriptionNotActive: 'Завершите 3-дневную тренировку',
    restDate: '2:00', 
    progress: {
    currentPosition: 3,
    maxPosition: 5,
    },
    },
    silver: {
    isActive: false,
    isDone: false,
    name: 'Silver',
    descriptionNotActive: 'Завершите 10-дневную тренировку',
    restDate: '', 
    progress: {
    currentPosition: 9,
    maxPosition: 15,
    },
    },
    gold: {
    isActive: false,
    isDone: false,
    name: 'Gold',
    descriptionNotActive: 'Завершите 25-дневную тренировку',
    restDate: '', 
    progress: {
    currentPosition: 4,
    maxPosition: 25,
    },
    },
    },
    },
    {
    id: 2,
    type: 'seriesTrainingAchivments',
    config: {
    bronze: {
    isActive: false,
    isDone: true,
    name: 'Bronze',
    descriptionNotActive: 'Завершите 3-дневную серию',
    restDate: '2:00', 
    progress: {
    currentPosition: 2,
    maxPosition: 5,
    },
    },
    silver: {
    isActive: true,
    isDone: false,
    name: 'Silver',
    descriptionNotActive: 'Завершите 10-дневную серию',
    restDate: '',
    progress: {
    currentPosition: 1,
    maxPosition: 15,
    },
    },
    gold: {
    isActive: false,
    isDone: false,
    name: 'Gold',
    descriptionNotActive: 'Завершите 25-дневную серию',
    restDate: '', 
    progress: {
    currentPosition: 7,
    maxPosition: 25,
    },
    },
    },
    },
    ]
   /* let result1 = []
    let result2 = []
    let result3 = []
    let main = achivmentsMock.map(all =>{
        result1.push(`id = ${all.id}, type is ${all.type}.`)
        temp = Object.values(all.config).map(sub=>{
            if(sub.isActive === true){
            result2.push(`id is ${all.id}, type is ${all.type}, name is ${sub.name}, isActive is True`)
            }
            if(sub.progress.maxPosition>=5){
                result3.push(`id is ${all.id}, type is ${all.type}, name is ${sub.name} with max pos >=5.`)
            }
        })
    })
console.log(`1) Вывести список всех id и типов (type)`)
console.log(result1)
console.log(`2) Вывести список всех груп и под ним подгруп где isActive=true `)
console.log(result2)
console.log(`3) Вывести список всех груп и под ним подгруп где progress-> maxposition >=5`)
console.log(result3)*/


var mainObj = {}

var main = achivmentsMock.map(lib => {
    
    mainObj = Object.assign(lib.id)
})

console.log(mainObj)