
import "./styles.css";
import food1 from "../Images/meal1.jpg";


export const Offers=()=>{
return(
    <div>
<section className="offersmain">
    <h1 className="menu2 offersmenu">--Our best Offers--</h1>
    <div className="foodinnercont offerscontainer">
        <div className="foodcard">
            <div className="foodimage">
 <img src={food1} alt="" /> 
            </div>
            <h4>Hot pizza</h4>
            <h2>ksh.200</h2>
            <button>purchase</button>

        </div>
    </div>
</section>

        
    </div>
)


}