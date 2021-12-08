import React,{useState} from "react";
import Header from "../header/header";

export const Component = ()=>{
    const [isEdit,setIsEdit] = useState<boolean>(true)
    const [data,setData] = useState<string[]>([])

const changeIsEdit = () =>{
setIsEdit(!isEdit)
}

const changeEnterIsEdit = (e:any) =>{
        if(e.key==="Enter"){
            setIsEdit(!isEdit)
        }
}

const changeName = (e:any)=>{
    console.log(e.target.value)
    let arr = [...data]
    arr[0] = e.target.value
    setData(arr)

}

const changeSurName = (e:any)=>{
    console.log(e.target.value)
    let arr = [...data]
    arr[1] = e.target.value
    setData(arr)

}

const changeAge = (e:any)=>{
    console.log(e.target.value)
    let arr = [...data]
    arr[2] = e.target.value
    setData(arr)

}

    return(
    <>
        <Header changeIsEdit={changeIsEdit} isEdit={isEdit} data={data} changeName={changeName} changeSurName={changeSurName} changeAge={changeAge} changeEnterIsEdit={changeEnterIsEdit}/>
    </>
)
}

export default Component