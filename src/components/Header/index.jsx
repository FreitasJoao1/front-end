import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h1>Sistema escolar</h1>
           <nav>
              <Link to="/">Inicio</Link>
              <Link to="/cadastro">Cadastrar</Link>
              <Link to="/listar-alunos">Listar Alunos</Link>
           
            </nav>
        </header>
    );
}