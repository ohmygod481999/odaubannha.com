import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import Footer2 from "./sections/Footer2";
import Cta from "./Cta";
import Header2 from "./Header2";
import { fetchAPI } from "../utils/api";
import Social from "./Social";

function Layout(props) {
    const [generalInfo, setGeneralInfo] = useState({});

    useEffect(() => {
        fetchAPI("/general").then((res) => {
            const { title, logo } = res;
            setGeneralInfo(res);
        });
    }, []);

    const childrenWithProps = React.Children.map(props.children, (child) => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { generalInfo });
        }
        return child;
    });

    return (
        <>
            {/* <Header generalInfo={generalInfo}/> */}
            {/* <Header2 generalInfo={generalInfo}/> */}
            {/* <Cart /> */}
            {childrenWithProps}
            <Footer generalInfo={generalInfo} />
            <Social generalInfo={generalInfo} />
            <div id="scroll" style={{ display: "none" }}>
                <i className="fa fa-angle-up" />
            </div>

            {/* <Cta /> */}
        </>
    );
}

export default Layout;
