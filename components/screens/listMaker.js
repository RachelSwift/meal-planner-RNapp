
import { RegularTextInput } from "../atoms/textInput"
import { DefaultButton } from '../atoms/button';
import React from 'react '
const ListMaker = () => {
  // A playaround when i created the project, keeping for future reference
  return (<>
  <RegularTextInput props={{
    placeholder: 'Placeholder', 
    onChangeText: (newText) => { setText(newText) } 
  }} />

  <DefaultButton props={{
    onPress: () => { 
      const noteId = notes.length >0 ? notes.reduce((a, b) => a.id > b.id ? a : b).id + 1 : 1
      const newNote = {id: noteId, noteText:text }

      console.log(`Adding new note... ${JSON.stringify(newNote)}`)
      setNotes([ ...notes, newNote ]) },
    title:"TestButton"
  }} />

  {
    notes.map(element => 
      <View style={styles.horisontalContainer} key={`note-${element.id}`}>
        <Text>{element.noteText}</Text>
        <DefaultButton props={{
          onPress: () => {
            console.log(`Removing note ${JSON.stringify(element)}...`)
            const noteIndex = notes.findIndex(note => note.id === element.id)
            const notesCopySpliced = [...notes]
            notesCopySpliced.splice(noteIndex, 1)

            setNotes(notesCopySpliced)
          },
          title:"Delete Note"
        }}/>
      </View>
    )
  }
  </>)
}

export default ListMaker