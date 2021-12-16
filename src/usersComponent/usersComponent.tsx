import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { BallBeat } from 'react-pure-loaders';
import "./usersComponent.css"
import Button from "../button/button";

export const Users = () => {
    const [users, setUsers] = useState<{
        address:object
        company:object
        email:string
        id:string
        name:string
        phone:string
        username:string
        website:string
    }[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    console.log(78)

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const history = useHistory()

    const changeUserPath = (str:string) => {
        history.push(`${str}`);

    };

    return (
        <>
            {
                loading ?<div className={"loadingContainer"}>  <BallBeat
                        color={'#123abc'}
                        loading={true}/>
                    </div>:
                    <div>
                            <Button handleOnClick={() => changeUserPath("/")} text={"go Home"}
                                    style={{backgroundColor: "#9999ff", width: "100px", height: "30px"}}
                                    value={"goElement"}/>

                        <div className={"elementContainer"}>
                            {users.map((el) => {
                                return (<div className={"element"}>
                                    <p className={"elementName"}>{el.name}</p>
                                        <Button handleOnClick={() => changeUserPath(`/users/${el.id}`)} text={`go User ${el.id}`}
                                                style={{backgroundColor: "#9999ff", width: "100px", height: "30px"}}
                                                value={"goElement"}/>
                                </div>)
                            })}
                        </div>
                    </div>
            }
        </>
            );
};

export default Users;