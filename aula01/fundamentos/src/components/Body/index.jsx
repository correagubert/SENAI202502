import styles from './Body.module.css'
import Card from './Card'
import { CardAPI } from './Card/CardAPI'

function Body () {
    const usuarios = [
        {nome: "Ana", idade: 22, cidade:"Nova Veneza"},
        {nome: "João", idade: 23, cidade:"Cajamar"},
        {nome: "Paulo", idade: 24, cidade:"Anitápolis"},
    ]

    return(
        <main className={styles.body}>
            <h2>Usuários Cadastrados:</h2>
            <div className={styles.cardContainer}>
                {usuarios.map((usuario, index) => (
                    <Card key={index} nome={usuario.nome} idade={usuario.idade} cidade={usuario.cidade}/>
                ))}
                {/* <Card/> */}
            </div>
            <h2>Usuários importados da API:</h2>
            <div className={styles.cardContainer}>
                <CardAPI/>
            </div>
        </main>
    )
}

export default Body