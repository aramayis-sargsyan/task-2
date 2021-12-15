import React, { useState } from "react";
import Header from "../header/header";
import Board from "../board/board";
import Users from "../usersComponent/usersComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
import UserData from "../userDataComponent/userDataComponent";
import Popup from "../popup/popup";
import { createBrowserHistory } from "history";
import "./component.css"

const history = createBrowserHistory();

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

    const changePage = (str:string) => {
            history.push(`${str}`,{ from: "users" });
        console.log(history)

    };

    return (
        <>
        {
            // @ts-ignore
            isEdit?<Router history={history} >

                <Header
                    changeIsEdit={changeIsEdit}
                    data={data}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Board
                                openedItem={(e: any): void => openedItem(e)}
                                isOpened={isOpened}
                                changePage={(str)=>changePage(str)}
                            />
                        }
                    />

                    <Route path="/users" element={<Users changeUserPath={(str:string)=>changePage(str)} key={generateUniqueID()}/>}/>

                    <Route
                        path={`/users/:id`}
                        element={
                            <div>
                                <UserData />
                            </div>
                        }
                    />

                </Routes>

            </Router>:
                <>
                    <div className={"headerOpacity"}>
                    <Router >

                        <Header
                            changeIsEdit={changeIsEdit}
                            data={data}
                        />

                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Board
                                        openedItem={(e: any): void => openedItem(e)}
                                        isOpened={isOpened}
                                        changePage={(str)=>changePage(str)}
                                    />
                                }
                            />

                            <Route path="/users" element={<Users changeUserPath={(str:string)=>changePage(str)} key={generateUniqueID()}/>}/>

                            <Route
                                path={`/users/:id`}
                                element={
                                    <div>
                                        <UserData />
                                    </div>
                                }
                            />

                        </Routes>

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