const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()

const note = notes.find(note => note.id === noteId)
if (!note) {
    location.assign('/index.html')
}

const noteIndex = notes.findIndex(note => note.id === noteId)

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('change', e => {
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('change', e => {
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})