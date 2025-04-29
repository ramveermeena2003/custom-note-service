import React, { useState } from 'react';
import { saveNote } from '../utils/storage';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');

    try {
      saveNote({ title, content });
      setTitle('');
      setContent('');
    } catch (err) {
      setError('Failed to save note. Storage might be full.');
    } finally {
      setIsSaving(false);
    }
  };

  // Why I chose useState + this submit handler: simple controlled form with saving feedback.

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add a New Note</h2>

        {error && (
          <div className="bg-red-100 text-red-800 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Title</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter note title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Content</label>
            <textarea className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your note here..." rows={6} value={content} onChange={(e) => setContent(e.target.value)} required/>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition"
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Add Note'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
