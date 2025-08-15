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

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
        console.log(users)
    }, [])

    return (
        <>
            {/* <p>{contador}</p> */}
            {/* <button onClick={incrementaValor}>Incrementar Valor</button> */}

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