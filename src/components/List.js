import React from 'react'

const List = () => {
    const manga_list =[
        {
            'name':'Death Note',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
            'chapter':'210',
            'genre':['mystery','thriller','physcology'],
            'status':'completed'

        },
        {
            'name':'Magic Emperor',
            'author': 'Wuser manhua',
            'coverImageURL': 'https://ethernalworld.com/wp-content/uploads/2023/03/02b1ff36ac92ebadd2fbfd8d3ff5e37d.jpg',
            'chapter':'417',
            'genre':['action','adventure','fantasy','magic'],
            'status':'ongoing'
        },
        {
            'name':'Nano Machine',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596769478i/54839426.jpg',
            'chapter':'192',
            'genre':['action','adventure','fantasy','martial arts'],
            'status':'ongoing'
        },
        {
            'name':'Soul Eater',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://i.redd.it/ay7lk9ed5r431.jpg',
            'chapter':'17',
            'genre':['horror','action'],
            'status':'ongoing'
        },

        {
        'name':'One Peice',
        'author': 'Hajime Isayama',
        'coverImageURL': 'https://staticc.sportskeeda.com/editor/2023/05/08217-16843259237294-1920.jpg',
        'chapter':'1317',
        'genre':['action','adventure','fantasy'],
        'status':'ongoing'
        },
        {
            'name':'Monster',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://m.media-amazon.com/images/I/518M771PX9L._AC_UF1000,1000_QL80_.jpg',
            'chapter':'413',
            'genre':['phsycology','crime','adventure'],
            'status':'completed'
        },
        {
            'name':'Blue Lock',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://www.rightstufanime.com/images/productImages/9781646516636_manga-blue-lock-volume-6-primary.jpg?resizeid=3&resizeh=600&resizew=600',
            'chapter':'256',
            'genre':['sport','physcology','fiction'],
            'status':'ongoing'
        },
        {
            'name':'Ghost in Toilet, Hanako-kun',
            'author': 'Hajime Isayama',
            'coverImageURL': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR096AiHmkCK7AmqTkpY1hdJ5ZV6CEid-euxw&usqp=CAU',
            'chapter':'131',
            'genre':['horror','romance','comedy'],
            'status':'completed'
        }
    ];
  return (
    <div id='list_container'>
      <div id='list_header'>
        <span class="material-icons-sharp" id='list_header_logo'>
        list_alt
        </span>
        <h2>Manga<span>List</span></h2>
      </div>
      
      
      <div id='list_flex_box'>
        {
            manga_list.map((manga,index)=>(
                <div className='list_flex_item' key={index}>
                    <div className='list_item_count'>{index+1}</div>
                    <img src={manga.coverImageURL} alt="error" />        
                    <div className='list_flex_item_detail'>
                        <h4>{manga.name}</h4>
                        <div>
                        Chapter . {manga.chapter}
                        </div>
                        <div>
                            Genre {
                                manga.genre.map((item,gIndex)=>(
                                    <span> . {item}</span>
                                ))
                            }
                        </div>
                        <div>Status . {manga.status}</div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default List
