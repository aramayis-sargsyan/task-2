import React, { useState, useEffect } from "react";
import { Link ,useParams} from "react-router-dom";
import { BallBeat } from 'react-pure-loaders';
import "./usersComponent.css"
import Button from "../button/button";

export interface userType{
    changeUserPath:(str:string)=>void
    key:string

}

export const Users = ({changeUserPath,key}:userType) => {
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

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                loading ?<div className={"loadingContainer"}>  <BallBeat
                        color={'#123abc'}
                        loading={true}/>
                    </div>:
                    <div>
                        <Link to={"/"}>
                            <Button handleOnClick={changeUserPath} text={"go Home"}
                                    style={{backgroundColor: "#9999ff", width: "100px", height: "30px"}}
                                    value={"goElement"}/>
                        </Link>

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