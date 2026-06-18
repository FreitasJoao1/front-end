import './style.css';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estaEnviado, setEstaEnviado] = useState(false);

    function LimparCamposDoFormulario() {
        setNome('');
        setEmail('');
        setTelefone('');
    }

    aysync function EnviarFormulario(event) {
        event.preventDefault();
        setEstaEnviado(true);

        const dadosDoAluno = {
            nome: nome,
            email: email,
            telefone: telefone
        };