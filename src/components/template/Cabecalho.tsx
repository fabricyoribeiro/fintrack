import BoasVindas from "./BoasVindas";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
    return (
        <div className={`
            flex justify-between items-center
            p-7 w-full max-w-6xl mx-auto border-b border-zinc-900
        `}>
            <BoasVindas />
            <MenuUsuario />
        </div>
    )
}