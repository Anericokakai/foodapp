import React from "react";
import "./styles.css";
import food1 from "../Images/meal1.jpg";
import food2 from "../Images/meal2.jpg";
import food3 from "../Images/meal3.jpg";

export const FoodContainer = () => {
  return (
    <div>
      <section className="foodcontainer">
        <div className="navsection">
          <h1>burgers</h1>
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
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food3} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food3} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
          <div className="foodcard">
            <div className="foodimage">
              <img src={food1} alt="" />
            </div>
            <h3>Cheeseburger</h3>
            <p>200g</p>
            <h2>ksh.100</h2>
          </div>
        </div>
      </section>
    </div>
  );
};
