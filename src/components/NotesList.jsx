import React, { useEffect, useState } from 'react';
import { getNotes, deleteNote, updateNote } from '../utils/storage';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const loadNotes = () => {
    try {
      setNotes(getNotes());
    } catch (e) {
      console.error('Error loading notes');
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleDelete = (index) => {
    deleteNote(index);
    loadNotes();
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditTitle(notes[index].title);
    setEditContent(notes[index].content);
  };

  const handleSave = (index) => {
    updateNote(index, { title: editTitle, content: editContent });
    setEditingIndex(null);
    loadNotes();
  };

  // Why useEffect to sync storage → state: ensures notes are loaded only once on mount.

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Your Notes</h2>

        {notes.length === 0 ? (
          <p className="text-center text-gray-600">No notes yet.</p>
        ) : (
          <ul className="space-y-6">
            {notes.map((note, idx) => (
              <li key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                {editingIndex === idx ? (
                  <>
                    <input
                      className="w-full border border-gray-300 mb-2 p-2 rounded-md"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                      className="w-full border border-gray-300 mb-3 p-2 rounded-md"
                      value={editContent}
                      rows={4}
                      onChange={(e) => setEditContent(e.target.value)}
                    />
                    <div className="flex gap-3">
                      <button
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                        onClick={() => handleSave(idx)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
                        onClick={() => setEditingIndex(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h3>
                    <p className="text-gray-700 whitespace-pre-wrap mb-4">{note.content}</p>
                    <div className="flex gap-3">
                      <button
                        className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                        onClick={() => handleEdit(idx)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDelete(idx)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotesList;
