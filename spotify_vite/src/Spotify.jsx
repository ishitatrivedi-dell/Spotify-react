import './spotify.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1cC4vkgqZjqvihd2UYOZ9o3_TsPTzUek",
  authDomain: "spotify-df592.firebaseapp.com",
  projectId: "spotify-df592",
  storageBucket: "spotify-df592.firebasestorage.app",
  messagingSenderId: "1034769293814",
  appId: "1:1034769293814:web:245ecb9519018eb57727d7",
  measurementId: "G-RG3LHDCD7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Spotify(){
return(

<>
 
<div className="app">
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
              <div className="card1">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
                  alt="Liked Songs"
                />
                <p>Liked Songs</p>
              </div>
              <div className="card1">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"
                  alt="Neffex Playlist"
                />
                <p>Neffex Playlist</p>
              </div>
              <div className="card1">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"
                  alt="K/DA"
                />
                <p>K/DA</p>
              </div>
              <div className="card1">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"
                  alt="Liked Songs"
                />
                <p>Liked Songs</p>
              </div>
              <div className="card1">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true"
                  alt="Dance/ElectronicMix"
                />
                <p>Dance/ElectronicMix</p>
              </div>
            </div>
          </div>

          <div className="content6">
            <div className="navbar2">
              <p>Shows you might like</p>
              <p>See All</p>
            </div>
            <div className="songs-playlist">
              <div className="cards2">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true"
                  alt="Weekly Motivation"
                />
                <p>Weekly Motivation</p>
              </div>
              <div className="cards2">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true"
                  alt="Meditation Self"
                />
                <p>Meditation Self</p>
              </div>
              <div className="cards2">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true"
                  alt="Words Beyond Act..."
                />
                <p>Words Beyond Act...</p>
              </div>
              <div className="cards2">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true"
                  alt="The Alexa Show"
                />
                <p>The Alexa Show</p>
              </div>
              <div className="cards2">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true"
                  alt="The Stories of Ma.."
                />
                <p>The Stories of Ma..</p>
              </div>
              <div className="cards2">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true"
                  alt="Motivation Daily B.."
                />
                <p>Motivation Daily B..</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="homei">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true" alt="" />
            
        <div className="p1">
            <p>Dreaming on</p>
            <p>NEFFEX</p>
        </div>
        <div className="heart">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" alt="" />
            <div className="play">
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true" alt="" />
            </div>
            <div className="play1">
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true" alt="" />
            </div>
        </div>
        </div>
          
          
      </footer>
    </div>
 </>
)

}
export default Spotify