import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <div className="links">
          <NavLink
            exact="true"
            to="/"
            className="navi"
            activeclassname="active"
          >
            Inicio
          </NavLink>
          <NavLink
            exact="true"
            to="/Map"
            className="navi"
            activeclassname="active"
          >
            Mapa
          </NavLink>
        </div>
      </NavContainer>
    </>
  );
};
const NavContainer = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

  h2 {
    color: #ffff;
    font-weight: 800;
  }

  padding: 2rem;
  display: flex;
  background-color: rgb(15, 54, 92);
  justify-content: space-between;
  align-items: center;

  .navi {
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    color: #fff;
    padding: 0 20px;
    font-size: 30px;
    font-weight: 400;
    font-style: oblique;
    font-family: "Bebas Neue", sans-serif;
  }
  .links {
    margin-right: 100px;
  }

  .navi:after {
    content: "";
    position: absolute;
    background-color: rgb(240, 218, 21);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: all 0.5s ease-in-out;
  }
  .navi:hover:after {
    width: 100%;
  }

  .active {
    color: rgb(240, 218, 21);
  }
`;

export default Navigation;
