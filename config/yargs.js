const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea.'
}


const optionsUpdate = {
    description,
    completed
}

const optionsCreate = {
    description
}


const argv = require('yargs')
    .command('create', 'Crear un elemento por hacer', optionsCreate)
    .command('update', 'Actualiza el estado completado de una tarea', optionsUpdate)
    .command('delete', 'Borra una tarea de la base de datos', optionsCreate)
    .help()
    .argv;

module.exports = {
    argv
}