import React, { useState } from 'react'

export default function Header( {onDarkModeClick} ) {
    const [isDarkMode, setIsDarkMode] = useState(false);  
    return (
    <div>
      <header>
        
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}
