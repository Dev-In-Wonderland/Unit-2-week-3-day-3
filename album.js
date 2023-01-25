let albums = [
    {
      "title": "The Highligts",
      "artist": "The Weeknd",
      "year": 2021,
      "genre": ["alternative R&B", "Sinth Pop"],
      "totalTracks": 18,
      "duration": "35.48",
      "tracks": [
        "Save your tears",
        "Blinding lights",
        "Save Your Tears",
        "Blinding Lights" ,
        "In Your Eyes" ,
        "Can't Feel My Face", 
        "I Feel It Coming (with Daft Punk)", 
        "Starboy (with Daft Punk)" ,
        "Pray for Me (with Kendrick Lamar)" ,
        "Heartless" ,
        "Often",
        "The Hills" ,
        "Call Out My Name" ,
        "Die for You" ,
        "Earned It (Fifty Shades of Grey)" ,
        "Love Me Harder (with Ariana Grande",
        "Acquainted"  ,
        "Wicked Games" ,
        "The Morning" 
        
        
      ]
    },
    {
      "title": "Io non so parlar d'amore",
      "artist": "Adriano Celentano",
      "year": 1999,
      "genre": ["musica leggera", "pop", "rock"],
      "totalTracks": 12,
      "duration": "55.03",
      "tracks": [
        "Gelosia", 
"L'emozione non ha voce",
"L'arcobaleno ",
"Una rosa pericolosa ",
"Qual è la direzione ",
"Angel ",
"L'uomo di cartone ",
"Le pesche d'inverno ",
"Senza amore ",
"Il sospetto ",
"Mi domando ",
"Sarai uno straccio ",
      ]
    },
    {
      "title": "Translation",
      "artist": "The Black Eyed Peas",
      "year": 2020,
      "genre": ["Hip hop","pop","dance","reggaeton","Latintrap", "Afrobeats"],
      "totalTracks": 15,
      "duration": "43.09",
      "tracks": [
        "Ritmo" ,
    "Feel the Beat" ,
      "Mamacita",
    "Girl like Me" ,
       "Vida Loca" ,
    "No Mañana" ,
       "Tonta Love" ,
    "Celebrate",
    "Todo Bueno" ,
           "Duro Hard" ,
           "Mabuti" ,
        "I Woke Up"	,
        "Get Loose Now",	
        "Action"	,
        "News Today"
      ]
    }
  ]
  



localStorage.setItem('albums-json', JSON.stringify(albums))


let retrievedAlbumsAsString = localStorage.getItem('albums-json')
console.log(typeof retrievedAlbumsAsString)

let retrievedAlbums = JSON.parse(retrievedAlbumsAsString)



console.log(retrievedAlbums[1])


 //Se scommento queste righe di codice il localStorage si svuota
 localStorage.removeItem("albums-json")
 let currentJSONNow = localStorage.getItem('albums-json')
 console.log(currentJSONNow)
