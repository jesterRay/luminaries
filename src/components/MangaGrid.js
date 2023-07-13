import React from 'react'

const MangaGrid = () => {
    const manga =[
        {
            'name':'Solo Leveling',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png',
            'chapter':'210',
            'genre':""

        },
        {
            'name':'The Beginning After The End',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1652424163l/60099365.jpg',
            'chapter':'140',
            'genre':""
        },
        {
            'name':'Return Of The Mount Hua Sect',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://i.redd.it/qgh6yarvf9x81.jpg',
            'chapter':'67',
            'genre':""
        },
        {
            'name':'The Promised Never Land',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkuxpO8Yk-zhBSBJrEUGKKEZzgTUA76yuEw&usqp=CAU',
            'chapter':'131',
            'genre':""
        },

        {
        'name':'Attack on Titan',
        'author': 'Hajime Isayama',
        'coverImageURL': 'https://pm1.aminoapps.com/6178/0d884ae5d41510cc073bea3f182c8108a4da8e2f_hq.jpg',
        'chapter':'140',
        'genre':""
        },
        {
            'name':'My Hero Academia',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://animemotivation.com/wp-content/uploads/2022/12/word-image-130857-18.jpg',
            'chapter':'230',
            'genre':""
        },
        {
            'name':'Jutsu Kaisen',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://e1.pxfuel.com/desktop-wallpaper/380/866/desktop-wallpaper-340-manga-cover-aesthetic-ideas-manga-cover-thumbnail.jpg',
            'chapter':'168',
            'genre':""
        },
        {
            'name':'Demon Slayer',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597435-22.jpg',
            'chapter':'331',
            'genre':""
        }
    ];



  return (
    <div id='manga_grid_container'>
        <div id='header'>
            <span class="material-icons-sharp" id='trending_logo'>
            trending_up
            </span>
            <h2>Popular<span>Manga</span></h2>
        </div>
        <div id='manga_grid'>
            {
                manga.map((item,index)=>(
                    <div className='manga_grid_item' key={index}>
                        <img src={item.coverImageURL} alt="error" srcset="" />
                        <h3>{item.name}</h3>
                        <h5>Chp . {item.chapter}</h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MangaGrid
