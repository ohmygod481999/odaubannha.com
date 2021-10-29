import React from "react";
import { useRouter } from "next/router";
import { getStrapiImage } from "../utils/medias";
import { getStrapiURL } from "../utils/api";

function Breadcrumb({ title, items = [], image }) {
    const router = useRouter();

    let breadcrumb_items = [];
    if (items.length > 0) {
        breadcrumb_items = items;
    } else {
        const path = router.asPath;
        const splitPath = path.split("/");
        splitPath.forEach((path, i) => {
            const isLastPath = i === splitPath.length - 1;
            if (path) {
                const item = {
                    title: path,
                };
                if (!isLastPath) {
                    item.path = path;
                }
                breadcrumb_items.push(item);
            }
        });
    }

    return (
        <div
            className="breadcrumb_section background_bg overlay_bg_50 page_title_light"
            data-img-src={
                // getStrapiURL("/uploads/190902964_349415109854044_3295922299793811112_n_84537481b6.jpg")
                image ? getStrapiImage(image) : "/assets/images/blog_bg.jpg"
            }
        >
            <div className="container">
                {/* STRART CONTAINER */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title">
                            <h1>{title}</h1>
                        </div>
                        <ol className="breadcrumb">
                            {breadcrumb_items.map((item, i) => {
                                if (i !== breadcrumb_items.length - 1)
                                    return (
                                        <li key={i} className="breadcrumb-item">
                                            <a href={"/" + item.path}>
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                else {
                                    return (
                                        <li className="breadcrumb-item active">
                                            {item.title}
                                        </li>
                                    );
                                }
                            })}
                        </ol>
                    </div>
                </div>
            </div>
            {/* END CONTAINER*/}
        </div>
    );
}

export default Breadcrumb;
