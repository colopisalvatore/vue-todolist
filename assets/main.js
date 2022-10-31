console.log('Vue OK')
// Descrizione:
// Rifare l'esercizio della to do list argomento dell to-do list a piacere
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// })

const { createApp } = Vue;

createApp({
    data() {
        return{
            newTask: '',
            tasks: [
                { text: 'Prendersi un anno sabbatico', done: false },
				{ text: 'Fare paracadutismo', done: true },
				{ text: 'Assistere all’eruzione di un vulcano', done: true },
				{ text: 'Fare un viaggio avventura spericolato', done: false },
				{ text: 'Visitare l’Europa con l’Interrail', done: true },
				{ text: "Imparare lo spagnolo", done: false },
				{ text: 'Vedere l’aurora boreale', done: false },
            ]			
        }
    },
    methods: {
		
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
		
        addNewTasks() {
            const newTask = this.newTasks.trim();
            if (newTask) {
                this.tasks.push({ text: newTask, done: false });
            }
            this.newTasks = '';
        },
		
        toggleTasksCheck(index) {
            const toggleTasks = this.tasks.map((task, i) => {
                if (i === index) task.done = !task.done;
                return task;
            });
            this.tasks = toggleTasks;
        },

        deleteAllTasks() {
            this.tasks = [];
        },
		
        marAllAsRead() {
            this.tasks = this.tasks.map((task) => {
                task.done = true;
                return task;
            });
        },
		
        marAllAsUnread() {
            this.tasks = this.tasks.map((task) => {
                task.done = false;
                return task;
            });
        },
    },
}).mount('#app')