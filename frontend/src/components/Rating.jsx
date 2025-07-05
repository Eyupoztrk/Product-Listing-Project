import React from 'react';

const styles = {
  starStyling: {
    color: '#ffc107', 
    marginRight: '2px',
  },
  ratingText: {
    marginLeft: '8px',
    color: '#888',
    fontSize: '14px',
  }
};

const Rating = ({ score }) => {
  const scoreOutOfFive = (score * 5).toFixed(1);

  const fullStars = Math.floor(scoreOutOfFive);
  const emptyStars = 5 - fullStars;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
       
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`} style={styles.starStyling}>★</span>
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} style={styles.starStyling}>☆</span>
        ))}
      </div>
      <span style={styles.ratingText}>{scoreOutOfFive}/5</span>
    </div>
  );
};

export default Rating;