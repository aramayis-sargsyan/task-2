import React, { useState } from "react";
import Header from "../header/header";
import Board from "../board/board";
import Users from "../usersComponent/usersComponent";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserData from "../userDataComponent/userDataComponent";
import Popup from "../popup/popup";
import "./component.css"

export const Component = () => {
    const [isEdit, setIsEdit] = useState<boolean>(true);
    const [data, setData] = useState<string[]>([]);
    const [isOpened, setIsOpened] = useState<string>("");

    const changeIsEdit = () => {
        setIsEdit(!isEdit);
    };

    const changeEnterIsEdit = (e: any) => {
        if (e.key === "Enter") {
            setIsEdit(!isEdit);
        }
    };

    const changeName = (e: any) => {
        let arr = [...data];
        arr[0] = e.target.value;
        setData(arr);
    };

    const changeSurName = (e: any) => {
        let arr = [...data];
        arr[1] = e.target.value;
        setData(arr);
    };

    const changeAge = (e: any): void => {
        let arr = [...data];
        arr[2] = e.target.value;
        setData(arr);
    };

    const openedItem = (e: any) => {
        if (isOpened === e.target.value) {
            setIsOpened("");
        } else {
            setIsOpened(e.target.value);
        }
    };
    return (
        <>
        {
            isEdit?<Router>

                <Header
                    changeIsEdit={changeIsEdit}
                    data={data}
                />

                <Switch>

                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Board openedItem={(e: any): void => openedItem(e)} isOpened={isOpened} />)}
                    />

                    <Route
                        exact
                        path="/users"
                        component={()=>( <Users />)}/>

                    <Route
                        path={`/users/:id`}
                        component={()=>(<UserData />
                        )}
                    />

                    </Switch>

            </Router>:
                <>
                    <div className={"headerOpacity"}>
                        <Router>

                            <Header
                                changeIsEdit={changeIsEdit}
                                data={data}
                            />

                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={()=>(
                                        <Board
                                            openedItem={(e: any): void => openedItem(e)}
                                            isOpened={isOpened}
                                        />)}
                                />

                                <Route
                                    exact
                                    path="/users"
                                    component={()=>( <Users />)}/>

                                <Route
                                    path={`/users/:id`}
                                    component={()=>(<UserData />
                                    )}
                                />
                            </Switch>

                        </Router>
                    </div>
                        <div className={"popupContainer"} style={{top:`${window.innerHeight/2-117}px`, left:`${window.innerWidth/2-322}px`}}>
                        <Popup changeIsEdit={changeIsEdit} changeEnterIsEdit={changeEnterIsEdit} changeName={changeName}
                               changeSurName={changeSurName} changeAge={changeAge} isEdit={isEdit} data={data}/>
                    </div>
                </>
                    }
        </>
    );
};

export default Component;

