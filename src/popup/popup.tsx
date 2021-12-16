import React from "react";
import Button from "../button/button";
import "./popup.css"

export interface PopupType{
    changeIsEdit:any
    changeEnterIsEdit:any
    changeName:any
    changeSurName:any
    changeAge:any
    isEdit:boolean
    data:string[]
}

export const Popup = ({changeIsEdit,isEdit,data,changeName,changeSurName,changeAge,changeEnterIsEdit}:PopupType) => {

    return(
        <>
        {!isEdit &&
            <div className={"popupContainer"} >
                <div className={"popupDataContainer"}>
                    <div className={"popupDataItemContainer"}>
                        <p className={"popupData"}>Name</p>
                        <input onChange={changeName} onKeyPress={changeEnterIsEdit} className={"dataInput"} defaultValue={data[0]} />
                    </div>
                    <div className={"popupDataItemContainer"}>
                        <p className={"popupData"}>Surname</p>
                        <input onChange={changeSurName} onKeyPress={changeEnterIsEdit} className={"dataInput"} value={data[1]}/>
                    </div>
                    <div className={"popupDataItemContainer"}>
                        <p className={"popupData"}>Age</p>
                        <input onChange={changeAge} onKeyPress={changeEnterIsEdit}  className={"dataInput"} value={data[2]}/>
                    </div>
                </div>

                <Button handleOnClick={changeIsEdit} text={"edit"} style={{backgroundColor:"#9999ff",width:"50px",height:"194px"}} value={"headerButton"}/>
            </div>
            }
        </>
    )
}

export default Popup