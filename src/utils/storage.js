const NOTES_KEY = 'my_notes';

export const getNotes = () => {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
  } catch {
    throw new Error('Failed to load notes');
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    localStorage.setItem(NOTES_KEY, JSON.stringify([...notes, note]));
  } catch {
    throw new Error('Failed to save note');
  }
};

export const deleteNote = (index) => {
  try {
    const notes = getNotes();
    notes.splice(index, 1);
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch {
    throw new Error('Failed to delete note');
  }
};

export const updateNote = (index, updatedNote) => {
  try {
    const notes = getNotes();
    notes[index] = updatedNote;
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch {
    throw new Error('Failed to update note');
  }
};
