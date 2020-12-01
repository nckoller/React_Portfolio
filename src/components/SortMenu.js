import React from 'react';

export function SortMenu({ handleSortSelection }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Display projects by Category:
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button" value="react" onClick={(e) => handleSortSelection(e)}>
          React
        </button>
        <button className="dropdown-item" type="button" value="MySQL" onClick={(e) => handleSortSelection(e)}>
          MySQL
        </button>
        <button className="dropdown-item" type="button" value="group-project" onClick={(e) => handleSortSelection(e)}>
          Group Projects
        </button>
        <button className="dropdown-item" type="button" value="API" onClick={(e) => handleSortSelection(e)}>
          API
        </button>
        <button className="dropdown-item" type="button" value="CLI" onClick={(e) => handleSortSelection(e)}>
          CLI
        </button>
        <button className="dropdown-item" type="button" value="Heroku" onClick={(e) => handleSortSelection(e)}>
          Heroku
        </button>
        <button className="dropdown-item" type="button" value="javascript" onClick={(e) => handleSortSelection(e)}>
          Javascript (all)
        </button>
      </div>
    </div>
  );
}