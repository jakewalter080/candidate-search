import React, { useState, useEffect } from 'react';
import { getNextCandidate } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const loadNextCandidate = async () => {
    try {
      setIsLoading(true);
      const candidate = await getNextCandidate();
      setCurrentCandidate(candidate);
      setError('');
    } catch (err) {
      setError('Failed to load candidate');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadNextCandidate();
  }, []);

  const handleAccept = () => {
    if (currentCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem(
        'savedCandidates',
        JSON.stringify([...savedCandidates, currentCandidate])
      );
    }
    loadNextCandidate();
  };
  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  if (!currentCandidate) {
    return (
      <div className="p-4 text-center">
        No more candidates available to review.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Candidate Search</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-4">
          <img 
            src={currentCandidate.avatar_url} 
            alt={`${currentCandidate.name}'s avatar`}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{currentCandidate.name}</h2>
            <p className="text-gray-600">@{currentCandidate.username}</p>
            <div className="mt-2 space-y-1">
              {currentCandidate.location && (
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> {currentCandidate.location}
                </p>
              )}
              {currentCandidate.company && (
                <p className="text-gray-700">
                  <span className="font-semibold">Company:</span> {currentCandidate.company}
                </p>
              )}
              {currentCandidate.email && (
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{' '}
                  <a href={`mailto:${currentCandidate.email}`} className="text-blue-600 hover:underline">
                    {currentCandidate.email}
                  </a>
                </p>
              )}
              <p className="text-gray-700">
                <span className="font-semibold">GitHub:</span>{' '}
                <a 
                  href={currentCandidate.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {currentCandidate.html_url}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={handleAccept}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={loadNextCandidate}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
