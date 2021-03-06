const proffys = [
    { 
        name:"Diego Fernandez", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"12345678", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    { 
        name:"Daniele Fernandez", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"12345678", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química", 
        cost:"20", 
        weekday:[2], 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

const getSubjects = (subjectNumber) => {
    const position = +subjectNumber -1
    return subject[position]
}

const pageLanding = (req, res) =>{
    return res.render('index.html')
}

const pageStudy = (req, res) =>{
    const filters = req.query
    return res.render('study.html', {proffys, filters, subjects, weekdays})
}

const pageGiveClasses = (req, res) =>{
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {
        data.subject = getSubjects(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render('give-classes.html', {subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express:server,
    noCache:true,
})

server.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.listen(5500)