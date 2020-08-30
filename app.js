const { argv } = require('./config/yargs');

const colors = require('colors');

const { create, getList, update, deleteTask } = require('./por-hacer/por-hacer');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = create(argv.description);
        console.log(task);
        break;

    case 'list':

        let list = getList();

        for (let task of list) {
            console.log('======= Por Hacer ======='.green);
            console.log(task.description);
            console.log('Estado: ', task.completed);
            console.log('=========================\n'.green);
        }

        break;

    case 'update':
        let resp = update(argv.description, argv.completed)
        if (resp) {
            console.log('Se a completado la tarea');
        } else {
            console.log('No se pudo completar la tarea');
        }
        break;

    case 'delete':
        let deleted = deleteTask(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Comando no reconocido.');
}