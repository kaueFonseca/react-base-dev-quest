 const showLabel = ({label})=>{
    return(
        alert(`A label desse button é: ${label}`)
    ) 
}


const ButtonLabel = (label)=>{
    return(
        <>
            <button onClick={()=>showLabel(label)}>Ver Label</button>
        </>
    )
}

export default ButtonLabel