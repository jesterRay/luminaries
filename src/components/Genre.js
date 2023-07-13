import React from 'react'

const Genre = () => {
    const gerne = ["action","adventure","comedy","crime",
"mystery","fantasy","historical","fiction","horror","romance","sport","thriller","darama","magic","physology",
"slice of life","martial arts","harem","shounen","mature",
"mecha"];
  return (
    <div id='genre_container'>
        <div id='genre_header'>
            <span class="material-icons-sharp" id='genre_dahboard'>
            dashboard
            </span>
            <h2>Manga<span>Genre</span></h2>
        </div>
      <div id='genre_flex_box'>
        {
            gerne.map((item,index)=>(
                <div className='genre_item' key={index}>
                    <span>{item}</span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Genre
