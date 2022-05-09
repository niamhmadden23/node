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
            body: title,
        })
       saveNotes(notes)
       console.log('new note added')
    } else {
            console.log('note title taken')
    }
   
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
    addNotes: addNotes
};