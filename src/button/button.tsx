import "./button.css"

export interface buttonType {
    style: {
        backgroundColor:string ,
        width:string,
        height:string
    }
    text:string
    handleOnClick:(e:any)=>void
    value:string
}

export const Button =({style = {backgroundColor: "#9999ff",width:"50%",height:"40px"},text,handleOnClick,value}:buttonType)=>{
    return(
        <button className={"button"} onClick={handleOnClick} style={style} value={value}>{text}</button>
    )
}

export default Button