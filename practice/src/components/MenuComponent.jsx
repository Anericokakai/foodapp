import React from "react";
import './styles.css';
import food1 from "../Images/meal1.jpg";
import food2 from "../Images/meal2.jpg";
import food3 from "../Images/meal3.jpg";

export const MenuFunction=()=>{
    return(
        <div>
 <section className="foodcontainer2">
        <div className="navsection">
          <h1 className="menu2">--our Menu</h1>
          <form action="">
            <input type="text" placeholder="search food" />
            <button type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>
        </div>

        <div className="foodinnercont">
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food3} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food3} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            
            
          </div>
        </div>
      </section>

        </div>
    )
}