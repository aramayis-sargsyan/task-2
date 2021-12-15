import React from "react";
import { useState, useEffect } from "react";
import { BallBeat } from 'react-pure-loaders';
import {Link,useParams} from "react-router-dom";
import Button from "../button/button";
import "./userDataComponent.css"

export const UserData=()=>{
    const [users, setUsers] = useState<{
        address: { city:string }
        company: { name:string }
        email:string
        id:string
        name:string
        phone:string
        username:string
        website:string
    }>({
        address: { city:"" },
        company: { name:"" },
        email:"",
        id:"",
        name:"",
        phone:"",
        username:"",
        website:"",
    });
    const [loading, setLoading] = useState<Boolean>(false);
    let {id}=useParams()

    useEffect(() => {
        console.log('aaaaaaaaaaaaaa')
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);


    const foo = () => {
    }

    return(
        <>
            {
                loading ? <div className={"loadingContainer"}>  <BallBeat
                        color={'#123abc'}
                        loading={true}/>
                    </div> :
                    <div>
                        <Link to={"/users"}>
                            <Button handleOnClick={foo} text={`go Users`}
                                    style={{backgroundColor: "#9999ff", width: "100px", height: "30px"}}
                                    value={"goElement"}/>
                        </Link>

                        <div className={"userContainer"}>
                            <p className={"user"}>ID: {users.id}</p>
                            <p className={"user"}>Name: {users.name}</p>
                            <p className={"user"}>Username: {users.username}</p>
                            <p className={"user"}>Phone: {users.phone}</p>
                            <p className={"user"}>Email: {users.email}</p>
                            <p className={"user"}>Website: {users.website}</p>
                            <p className={"user"}>Company name: {users.company.name}</p>
                            <p className={"user"}>City: {users.address.city}</p>

                        </div>
                    </div>
            }
        </>
    )
}
export default UserData