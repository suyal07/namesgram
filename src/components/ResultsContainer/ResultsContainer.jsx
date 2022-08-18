import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedname }) => {
    const suggestNameJsx = suggestedname.map((suggestedname) => {
        return <NameCard key={suggestedname} suggestedname={suggestedname} />;
    });

    return <div className="results-container">{suggestNameJsx}</div>;
};

export default ResultsContainer;