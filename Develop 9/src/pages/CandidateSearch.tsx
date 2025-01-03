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

  

export default CandidateSearch;
