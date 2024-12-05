import './css/Upperbody.css'

function Upperbody(){
    
     const Data = [
               {id:1 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true", title:'Liked Songs'},
               {id:2 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true", title:'Neffex Playlist'},
               {id:3 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true", title:'K/DA'},
               {id:4 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true", title:'Liked Songs'},
               {id:5 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true", title:"Dance/ Electronix mix"}
         ]

         const Data1 = [
            {id:1 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" , title:"weekly motivation"},
            {id:2 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true", title:"Meditation self"},
            {id:3 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true", title:"Words Beyond Act..."},
            {id:4 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true", title:"The Alexa Show"},
            {id:5 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", title:"The Stories of Ma.."},
            {id:6 , img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", title:"Motivation Daily B.."}
         ]
    return(
<>

<div className="upper-body">
        <div className="side-bar">
          <div className="logo">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"
              alt="Spotify Logo"
            />
          </div>

          <div className="content1 sidebar-content">
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
                alt="Home"
              />
              <p>Home</p>
            </div>
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
                alt="Search"
              />
              <p>Search</p>
            </div>
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
                alt="Your Library"
              />
              <p>Your Library</p>
            </div>
          </div>

          <div className="content2 sidebar-content">
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"
                alt="Create Playlist"
              />
              <p>Create Playlist</p>
            </div>
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
                alt="Liked Songs"
              />
              <p>Liked Songs</p>
            </div>
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"
                alt="Your Episodes"
              />
              <p>Your Episodes</p>
            </div>
          </div>

          <div className="content3 sidebar-content">
            <p>FAV</p>
            <p>Daily Mix1</p>
            <p>Discover Weekly</p>
            <p>Malayalam</p>
            <p>Dance/ElectronicMix</p>
            <p>EDM/Popular</p>
          </div>

          <div className="content4 sidebar-content">
            <div className="home">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
                alt="Install Apps"
              />
              <p>Install Apps</p>
            </div>
          </div>
        </div>

        <div className="maincontent">
          <div className="navbar">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"
              alt="Navigation Arrow"
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"
              alt="User"
            />
          </div>

          <div className="content5">
            <p>Good morning</p>
            
             <div className="cards">
             {Data.map((datas) => (
                <div key={datas.id} className= "card1" >
                    <img src= {datas.img} alt= {datas.title} />
                    </div>
             ))}
             </div>
          </div>

          <div className="content6">
            <div className="navbar2">
              <p>Shows you might like</p>
              <p>See All</p>
            </div>
            <div className="songs-playlist">
                
            {Data1.map((Datas) => (
                <div key={Datas.id} className= "card2" >
                    <img src= {Datas.img} alt= {Datas.title} />
               </div>
             ))}
             
            </div>
          </div>
        </div>
      </div>

</>

    )
}

export default Upperbody;