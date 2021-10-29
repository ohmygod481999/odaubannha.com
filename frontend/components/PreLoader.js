import React from "react";

function PreLoader() {
    return (
        <div id="preloader" className="loaded" style={{ display: "none" }}>
            <div className="loader_wrap">
                <div className="sk-chase">
                    <div className="sk-chase-dot" />
                    <div className="sk-chase-dot" />
                    <div className="sk-chase-dot" />
                    <div className="sk-chase-dot" />
                    <div className="sk-chase-dot" />
                    <div className="sk-chase-dot" />
                </div>
            </div>
        </div>
    );
}

export default PreLoader;
