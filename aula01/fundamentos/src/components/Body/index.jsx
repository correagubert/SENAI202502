import styles from './Body.module.css'
import Card from './Card'

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
                <Card/>
            </div>
        </main>
    )
}

export default Body