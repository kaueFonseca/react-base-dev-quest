const Text = ({title, text,color})=>{
     return(
        <>
         <h2>{title}</h2>
         <p style={{color:color, textTransform:"uppercase"}}>{text}</p>
        </>
        
     )
}

export default Text