import React,{useState} from "react";
import Header from "../header/header";
import Board from "../board/board";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Component = ()=>{
    const [isEdit,setIsEdit] = useState<boolean>(true)
    const [data,setData] = useState<string[]>([])
    const [isOpened,setIsOpened]=useState<string>("")

const changeIsEdit = () =>{
setIsEdit(!isEdit)
}

const changeEnterIsEdit = (e:any) =>{
        if(e.key==="Enter"){
            setIsEdit(!isEdit)
        }
}

const changeName = (e:any)=>{
    let arr = [...data]
    arr[0] = e.target.value
    setData(arr)

}

const changeSurName = (e:any)=>{
    let arr = [...data]
    arr[1] = e.target.value
    setData(arr)

}

const changeAge = (e:any):void=>{
    let arr = [...data]
    arr[2] = e.target.value
    setData(arr)

}

    const openedItem = (e:any) =>{
        console.log(e.target.value)
if(isOpened===e.target.value){
    console.log(1)
    setIsOpened("")
}else {
    console.log(2)
    setIsOpened(e.target.value)
}
    }

    const changePage = () => {
        console.warn(7)
    }

    return(
        <Router>
            <Header changeIsEdit={changeIsEdit} isEdit={isEdit} data={data} changeName={changeName} changeSurName={changeSurName} changeAge={changeAge} changeEnterIsEdit={changeEnterIsEdit}/>
            {/*<Route path="/">*/}
                <Board openedItem={(e:any):void=>openedItem(e)} isOpened={isOpened} changePage={changePage}/>
            {/*</Route>*/}

            {/*<Route  path="/about">*/}
                {/*    <div>*/}
                    {/*    <p>,skvjdsvhjd</p>*/}
                {/*    </div>*/}
            {/*</Route>*/}
        </Router>
)
}

export default Component


