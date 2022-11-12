import { useState, useEffect } from "react";
import "./home.css";
import { Social } from "../../componentes/Social";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
export default function Home() {
  const [links, setLinks] = useState([]);
const [socialLinks,setSocialLinks] = useState({})

  
 useEffect(() =>{
  function loadSocialLinks(){
    const docRef = doc(db,"social", "link")
    getDoc(docRef)
    .then((snapshot) =>{
      if(snapshot.data() !== undefined){
        setSocialLinks({
        
          instagram: snapshot.data().instagram,
          github:snapshot.data().github,
          linkedin:snapshot.data().linkedin
        })
      }
    })
  }
  loadSocialLinks();
 })
  return (
    <div className="home-container">
      <h1>Edmario Santos</h1>
      <span>Veja meus Links 👇</span>
      <main className="links">
        {links.map((item) => (
          <section
            key={item.id}
            className="link-area"
            style={{ backgroundColor: item.bg }}
          >
            <a href={item.urlInput} target="blank">
              <p className="link-text" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
        
       
          <Social url={socialLinks?.instagram}>
            <FaInstagram size={35} color="#fff" />
          </Social>
        
          <Social url={socialLinks?.github}>
            <FaGithub size={35} color="#fff" />
          </Social>
         
          <Social url={socialLinks?.linkedin}>
            <FaLinkedin size={35} color="#fff" />
          </Social>

         
        </footer>
        )}
      </main>
    </div>
  );
}
