import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const [logDisplay, setLogDisplay] = useState(null)
    const { index } = useParams()
    // const API = import.meta.env.VITE_BASE_URL 

    // console.log(index)

    useEffect(() => {
        fetch(`http://localhost:4001/logs/${index}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setLogDisplay(res)
            })
            .catch(err => console.log(err))
    }, [])

    // console.log(logDisplay)
    return (
        <div>
            <h1>show</h1>
            {logDisplay &&
                <div>
                    <h3>{logDisplay.post}</h3>
                </div>
            }
{/* <Link to={`/logs/${ind}/edit`}>Edit</Link>
            <p>Edit</p> */}
        </div>
    )
}

export default Show