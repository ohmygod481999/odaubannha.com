import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import PageDetail from "../../components/PageDetail";

function index() {
    return (
        <div>
            <Breadcrumb
                title={"VỀ CHÚNG TÔI"}
                items={[
                    {
                        title: "Home",
                        path: "/",
                    },
                    {
                        title: "About us",
                    },
                ]}
            />
            <PageDetail />
        </div>
    );
}

export default index;
