import {Link} from "react-router-dom";
import React from "react";

const Menu = () => {
    return (
        <nav>
            {/*주소 앞에 '/' 붙이면 절대 경로! 상대 경로로 지정하면 중복 경로 문제 발생 가능*/}
            <Link to="/">Home</Link>
            <Link to="/stuff">Stuff</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Menu;