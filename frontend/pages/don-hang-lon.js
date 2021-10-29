import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { getBigOrder } from "../services/bigorder.service";
import Cta1 from "../components/sections/Cta1";
import Contact from "../components/sections/Contact";

function BigOrder({ bigOrder }) {
    const {
        title,
        image,
        description,
        subDescription,
        button,
        contact,
    } = bigOrder;
    
    return (
        <div>
            {/* <Breadcrumb title={title} image={image}/> */}
            <Cta1
                title={title}
                image={image}
                description={description}
                subDescription={subDescription}
                button={button}
            />
            <Contact contact={contact} />
        </div>
    );
}

export default BigOrder;

export async function getServerSideProps() {
    const bigOrder = await getBigOrder();
    return { props: { bigOrder } };
}
