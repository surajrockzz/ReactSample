This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents

- [Folder Structure](#folder-structure)
-[Components](#components-used)

## Folder Structure

After creation, your project should look like this:

```
first-react/
  README.md
  node_modules/
  package.json
  public/
  css/
    styles.css
  images/
    albums
    covers
    raw
  index.html
  src/
    components/
      albumlist.js
      artists.js
      artistlist.js
      banner.js
      header.js
      home.js
    index.js
  db.json

```

With the help of the json-server a fake json server is created for serving db.json file to serve images and required content.

## Components
  #Header <br/>
    consists of banner and Logo. 

  #Banner <br/>
    which consists of Header.

  #Home <br/>
    consists of banner and Albumlist.

  #Artists <br/>
    consists of the banner and cover of artist and biography of artist and AlbumList.

  #ArtistList <br/>
    with the help of json-server we fetched the images and the name of artists.

  #AlbumList <br/>
    with the help of json-server we fetched the images and the name of albums.
  
  
 
     






