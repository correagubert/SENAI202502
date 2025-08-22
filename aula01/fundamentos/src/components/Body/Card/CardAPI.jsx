import { useEffect } from "react"
import { useState } from "react"
import styles from "./Card.module.css"

export const CardAPI = () => {
    // let contador = 0
    // const [contador, setContador] = useState(0)

    // const incrementaValor = () => {
    // contador++
    // console.log(contador)
    // setContador(prev => prev+1)
    // }

    const [users, setUsers] = useState([])

    const [filtro, setFiltro] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const filtrados = data.filter((user) => user.name.toLowerCase().includes(filtro.toLowerCase()))
                setUsers(filtrados)
            })
        console.log(users)
    }, [filtro])

    return (
        <>
            {/* <p>{contador}</p> */}
            {/* <button onClick={incrementaValor}>Incrementar Valor</button> */}

            <input type="text" placeholder="Filtrar por nome..." className={styles.inputFiltro} value={filtro} onChange={(e) => setFiltro(e.target.value)} />

            <div className={styles.cardContainerAPI}>
                {
                    users.map((user) => (
                        <div className={styles.card} key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.email.street}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}