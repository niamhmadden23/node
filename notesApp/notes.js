const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = () => {
    console.log('Notes...')
}

const addNotes = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title;
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title, 
            body: body,
        })
       saveNotes(notes)
       console.log(chalk.green('new note added'))
    } else {
            console.log('note title taken')
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
  const notesToKeep = notes.filter(function(note){
      return note.title !== title;
  })
      saveNotes(notesToKeep)
      console.log(chalk.red(`Note ${title} removed`))
    
} 


const saveNotes = function (notes){
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e){
        return []
    }
 
}

module.exports = {
    getNotes: getNotes, 
    addNotes: addNotes,
    removeNotes: removeNotes,
};