import './erro.css'
import  {Link} from 'react-router-dom'
import { Logo } from '../../componentes/Logo'

export default function Error(){
    return(
        <div className="error">
            <Logo/>
            <h1>Pagina nao encontrada</h1>

          <p>Esta Pagina não existe</p>

        <Link className='link' to="/">
        Voltar para Home
        </Link>
        </div>
    )
}