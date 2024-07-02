import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Index'

const Index = () => {
    const [listOfLogs, setListOfLogs] = useState([])
    // const API = import.meta.env.VITE_BASE_URL 


    useEffect(() => {
        fetch('http://localhost:4001/logs')
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setListOfLogs(res)
            })
            .catch(err => console.error(err))

    }, [])

    return (
        <>
         <h2>Index</h2>
            {listOfLogs.map((logItem, ind) => (
                <div key={ind}>
                    <Link to={`/logs/${ind}`}>{logItem.title}</Link>
                </div>
            ))}
        </>
    );
    

    // return (
    //     <div>
    //     {/* //     <h2>Index</h2>
    //     //     <main>
    //     //         <h4>Mistakes</h4>
    //     //         <h4>Captain Name</h4>
    //     //         <h4>See This Log</h4>
    //     //     </main> */}
    //         {
    //             listOfLogs.map((logItem, ind) => {
    //                 return (
    //                     <>
    //                         {/* <div key={ind}>{logItem.captainName}</div> */}
    //                         <div key={ind}>
    //                             <Link to={`/logs/${logItem.title}`}>{logItem.title}</Link>
    //                         </div>
    //                     </>
    //                 )
    //             })
    //         }
    //     </div>
    // )
}

export default Index