import React, { useState, useEffect } from 'react'

export default function DisplayDetails() {
    const [apiData, setApiData] = useState([])


    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        let users = await fetch("https://randomuser.me/api").then(res => { return res.json() });
        if (users.results.length > 0) {
            setApiData(users)
            console.log(apiData)
        }
        else {
            console.log("No Records found")
        }
    };
    const refreshfun = () => {
        getUsers()
    }

    return (
        <>

            <table style={{ border: "1px solid black" }}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>

                    {apiData.results ? apiData.results.map((item) => (
                        <tr>
                            <td>{item.name.title + " " + item.name.first + " " + item.name.last}</td>
                            <td>{item.email}</td>
                        </tr>
                    )) : <tr>No data found</tr>
                    }


                </tbody>
            </table>
            <br></br>
            <div style={{textAlign:"center"}} >
                <button style={{ backgroundColor: "#c8f1f1" }} onClick={refreshfun}>Refresh</button>
            </div>
        </>
    )
}
