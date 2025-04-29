import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  const [view, setView] = useState('add');
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-center space-x-4 p-4 bg-white shadow">
        <button
          onClick={() => setView('add')}
          className={`px-4 py-2 rounded ${view === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Add Note
        </button>
        <button
          onClick={() => setView('view')}
          className={`px-4 py-2 rounded ${view === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          View Notes
        </button>
      </nav>
      {/* // Why this nav approach for simplicity: simple buttons avoid router complexity and keep state in memory */}

      {view === 'add' ? (
        <AddNote onNoteAdded={() => setRefresh(!refresh)} />
      ) : (
        <NotesList key={refresh} />
      )}
    </div>
  );
}

export default App;
