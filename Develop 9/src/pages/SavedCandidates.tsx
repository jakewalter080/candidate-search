import React, { useState, useEffect } from 'react';
import type { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  const handleReject = (index: number) => {
    const updatedCandidates = savedCandidates.filter((_, i) => i !== index);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  if (savedCandidates.length === 0) {
    return (
      <div className="p-4 text-center">
        No candidates have been accepted yet.
      </div>
    );
  }

    if (savedCandidates.length === 0) {
    return (
      <div className="p-4 text-center">
        No candidates have been accepted yet.
      </div>
    );
  }
  
  return (
  <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Saved Candidates</h1>
        <div className="space-y-4">
          {savedCandidates.map((candidate, index) => (
            <div key={`${candidate.username}-${index}`} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-4">
                <img 
                  src={candidate.avatar_url} 
                  alt={`${candidate.name}'s avatar`}
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{candidate.name}</h2>
                  <p className="text-gray-600">@{candidate.username}</p>
                  <div className="mt-2 space-y-1">
                    {candidate.location && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Location:</span> {candidate.location}
                      </p>
                    )}
                    {candidate.company && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Company:</span> {candidate.company}
                      </p>
                    )}
                    {candidate.email && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Email:</span>{' '}
                        <a href={`mailto:${candidate.email}`} className="text-blue-600 hover:underline">
                          {candidate.email}
                        </a>
                      </p>
                    )}
                    <p className="text-gray-700">
                      <span className="font-semibold">GitHub:</span>{' '}
                      <a 
                        href={candidate.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {candidate.html_url}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleReject(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


export default SavedCandidates;
