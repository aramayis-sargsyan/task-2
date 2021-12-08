
export interface buttonType {
    color:string
}

export const Button =({color = "#9999ff"}:buttonType)=>{
    return(
        <button className={"button"} ></button>
    )
}

export default Button