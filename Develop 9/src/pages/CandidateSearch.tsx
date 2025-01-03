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

export default CandidateSearch;
