import React from 'react';
import { SortMenu } from './SortMenu';
import { Project } from './Project';

export function Portfolio({ handleSortSelection, projectArr }) {
  return (
    <div className="portfolio-container">
      <SortMenu handleSortSelection={handleSortSelection} />
      <div>
        {projectArr.map((ele) => {
          return <Project projectArr={ele} />;
        })}
      </div>
    </div>
  );
}
