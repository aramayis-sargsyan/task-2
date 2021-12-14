import React from "react";
import Button from "../button/button";
import "./header.css"

export interface headerType{
    changeIsEdit:any
    data:string[]

}

export const Header = ({changeIsEdit,data}:headerType) => {
return(
    <>
    <div className={"headerContainer"} >
        {
             <div className={"dataContainer"}>
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
                </div>
        }

        <Button handleOnClick={changeIsEdit} text={"edit"} style={{backgroundColor:"#9999ff",width:"50px",height:"194px"}} value={"headerButton"}/>

    </div>

    </>
)
}

export default Header
