import React, {useState} from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import "./board.css"

export interface boardType {
    openedItem: (e: any) => void;
    changePage: (e: any) => void;
    isOpened: string;
}

export const Board = ({ openedItem, isOpened, changePage }: boardType) =>{

    return(
               <div className={"boardContainer"} >

            <div className={"boardButtonContainer"}>
                <Button style={{backgroundColor:"#9999ff",width:"50%",height:"40px"}} text={"Users"} handleOnClick={(e:any)=>openedItem(e)} value={"button1"}/>
                <Button style={{backgroundColor:"#9999ff",width:"50%",height:"40px"}} text={"board2"} handleOnClick={(e:any)=>openedItem(e)} value={"button2"}/>
                <Button style={{backgroundColor:"#9999ff",width:"50%",height:"40px"}} text={"board3"} handleOnClick={(e:any)=>openedItem(e)} value={"button3"}/>
            </div>

            {(isOpened==="button1") &&
            <div className={"boardItemContainer"} >
                <p>KJFHAHFASHF aaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa gdddddddddddddd dddddddddddddddd ddddddddddddddd ddddddddddddd</p>
                <div className={"pageButton"}>
                    <Button style={{backgroundColor:"#9999ff",width:"104px",height:"40px"}} text={"board2 >"} handleOnClick={(e:any)=>openedItem(e)} value={"button2"}/>
                    <Link to={"/users"}>
                        <Button style={{backgroundColor:"#9999ff",width:"104px",height:"40px"}} text={"go Users"} handleOnClick={()=>changePage("/users")} value={"button1"}/>
                    </Link>
                </div>
            </div>
            }

            {(isOpened==="button2") &&
            <div className={"boardItemContainer"}>
                <p>KJFHAHFASHF b bbbbbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbb bbbbbbbbbbb gdddddddddddddd dddddddddddddddd ddddddddddddddd ddddddddddddd</p>
                <div className={"pageButton"}>
                    <div className={"centerButton"}>
                        <Button style={{backgroundColor:"#9999ff",width:"50%",height:"40px"}} text={"< Users"} handleOnClick={(e:any)=>openedItem(e)} value={"button1"}/>
                        <Button style={{backgroundColor:"#9999ff",width:"50%",height:"40px"}} text={"board3 >"} handleOnClick={(e:any)=>openedItem(e)} value={"button3"}/>
                    </div>
                        <Link to={"/board2"} >
                            <Button style={{backgroundColor:"#9999ff",width:"104px",height:"40px"}} text={"change"} handleOnClick={(e:any)=>changePage(e)} value={"button2"}/>
                        </Link>
                    </div>
                </div>
            }

            {(isOpened==="button3") &&
            <div className={"boardItemContainer"} >
                <p>KJFHAHFASHF ccccccccccccccc cccccccccccc ccccccccccccc cccccccccccc gdddddddddddddd dddddddddddddddd ddddddddddddddd ddddddddddddd</p>
                <div className={"pageButton"}>
                    <Button style={{backgroundColor:"#9999ff",width:"104px",height:"40px"}} text={"< board2"} handleOnClick={(e:any)=>openedItem(e)} value={"button2"}/>
                        <Link to={"/board3"} >
                            <Button style={{backgroundColor:"#9999ff",width:"104px",height:"40px"}} text={"change"} handleOnClick={(e:any)=>changePage(e)} value={"button3"}/>
                        </Link>
                    </div>
            </div>

            }
        </div>
    )
}

export default Board

