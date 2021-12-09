import React from "react";
import Button from "../button/button";
import "./header.css"

export interface headerType{
    changeIsEdit:any
    changeEnterIsEdit:any
    changeName:any
    changeSurName:any
    changeAge:any
    isEdit:boolean
    data:string[]

}

export const Header = ({changeIsEdit,isEdit,data,changeName,changeSurName,changeAge,changeEnterIsEdit}:headerType) => {
return(
    <>
    <div className={"headerContainer"}>
        {
            isEdit? <div className={"dataContainer"}>
                    <div className={"dataItemContainer"}>
                <p className={"data"}>Name</p>
                <p className={"data"}>{data[0]}</p>
                </div>
                    <div className={"dataItemContainer"}>
                <p className={"data"}>Surname</p>
                <p className={"data"}>{data[1]}</p>
                </div>
                    <div className={"dataItemContainer"}>
                <p className={"data"}>Age</p>
                <p className={"data"}>{data[2]}</p>
                </div>
            </div>:
                <div className={"dataContainer"}>
                    <div className={"dataItemContainer"}>
                        <p className={"data"}>Name</p>
                        <input onChange={changeName} onKeyPress={changeEnterIsEdit} className={"dataInput"} defaultValue={data[0]}/>
                    </div>
                    <div className={"dataItemContainer"}>
                        <p className={"data"}>Surname</p>
                        <input onChange={changeSurName} onKeyPress={changeEnterIsEdit} className={"dataInput"} value={data[1]}/>
                    </div>
                    <div className={"dataItemContainer"}>
                        <p className={"data"}>Age</p>
                        <input onChange={changeAge} onKeyPress={changeEnterIsEdit} className={"dataInput"} value={data[2]}/>
                    </div>
                </div>
        }

        <Button handleOnClick={changeIsEdit} text={"edit"} style={{backgroundColor:"#9999ff",width:"50px",height:"194px"}} value={"headerButton"}/>

    </div>

    </>
)
}

export default Header