import React, { useState } from "react";
import Header from "../header/header";
import Board from "../board/board";
import Users from "../usersComponent/usersComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
import UserData from "../userDataComponent/userDataComponent";
import Popup from "../popup/popup";

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

    const changePage = () => {
    };

    const changeUserPath=(id:string)=>{
    }

    return (
        <>
        {
            isEdit?<Router>

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
                                changePage={changePage}
                            />
                        }
                    />

                    <Route path="/users" element={<Users changeUserPath={(id:string)=>changeUserPath(id)} key={generateUniqueID()}/>}/>

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

                <Popup changeIsEdit={changeIsEdit} changeEnterIsEdit={changeEnterIsEdit} changeName={changeName}
                       changeSurName={changeSurName} changeAge={changeAge} isEdit={isEdit} data={data}/>
}
        </>
    );
};

export default Component;