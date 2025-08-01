import { assets } from "../../assets/assets";

export default function Stars() {

 return (

    <div className = "flex items-center gap-1">

        <img src = {assets.starIconFilled} alt="starIconFilled" className="w-4.5 h-4.5" />
        <img src = {assets.starIconFilled} alt="starIconFilled" className="w-4.5 h-4.5" />
        <img src = {assets.starIconFilled} alt="starIconFilled" className="w-4.5 h-4.5" />
        <img src = {assets.starIconFilled} alt="starIconFilled" className="w-4.5 h-4.5" />
        <img src = {assets.starIconOutlined} alt="starIconFilled" className="w-4.5 h-4.5" />

    </div>

)
}
