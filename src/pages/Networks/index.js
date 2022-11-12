import './networks.css'
import { useState,useEffect } from 'react'
import {Header}  from '../../componentes/Header'
import {Input} from '../../componentes/input'
import {MdAddLink} from 'react-icons/md'
import { async } from '@firebase/util'
import { toast } from 'react-toastify'

import {db} from '../../services/firebaseConnection'
import{
setDoc,
doc,
getDoc
} from 'firebase/firestore'

export default function Networks(){
    const[facebook,setFacebook] =useState("") ;
    const[instagram,setInstagram] =useState("") ;
    const[github,setGithub] =useState("") ;
    const [linkedin,setLinkedin] = useState("");

    useEffect(() =>{
        function loadLinks(){
            const docRef = doc(db,"social","link")
          getDoc(docRef)
          .then((snapshot)=>{
          if(snapshot.data() != undefined){
       
            setInstagram(snapshot.data().instagram)
            setGithub(snapshot.data().github)
            setLinkedin(snapshot.data().linkedin)
          }
            
          })
        }
        loadLinks();
    },[])

    async function handleSave(e){
        e.preventDefault();

setDoc(doc(db,"social","link"),{
   
    instagram:instagram,
    github:github,
    linkedin:linkedin
   
  })
  .then(() =>{
console.log("Urls salva com sucesso")
toast.success("SALVO COM SUCESSO!")
  })
  .catch((error)=>{
    console.log("Erro ao salvar" + error)
    toast.error("ERRO AO SALVAR LINKS")
  })
    }

    return(
       
       <div className="admin-container">
        <Header/>
      
        <h1 className="title-social">Redes Socias</h1>
       
        <form className="form" onSubmit={handleSave}>
       
           
           
       
            <label className="label">Link Instagram</label>

            <Input
            placeholder = "Digite url do Instagram..."
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            />
            <label className="label">Link do Github</label>

            <Input
            placeholder = "Digite url do Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            />
            <label className="label">Link do Linkedin</label>

            <Input
            placeholder = "Digite url do Linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            />
       
          <button type='submit' className='btn-register'>
            Salvar Links <MdAddLink size={24} color="#fff"/>
          </button>
       
        </form>
        </div>

    )
}