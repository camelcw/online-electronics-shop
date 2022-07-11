require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const fileupload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = 8080 || process.env.PORT

const app = express()
app.use(cors()) //для управления тегами используем cors
app.use(express.json()) //Приложение могло парсить json формат
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/api', router)
// Обратботчик ошибок должен идти в самом конце, так как не вызвана функция next
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server start!'})
})

const start = async () => {
    try {
        await sequelize.authenticate() //Установка подключения к БД
        await sequelize.sync() // Сравнивать состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()
