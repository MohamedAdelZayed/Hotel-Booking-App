
export default function Title( { align , heading , description } ) {

 return (

    <>
    
    <div className = {`text-${align}`} >

            <h1 className = {`font-playFair text-4xl md:text-[40px] text-${align}  `} >{heading}</h1>

            <p className = {` text-sm md:text-base text-gray-500/90 max-w-174 mt-2 ${ align === "center" ? 'mx-auto' : "" } `} >{description}</p>

    </div>

    </>

)
}
