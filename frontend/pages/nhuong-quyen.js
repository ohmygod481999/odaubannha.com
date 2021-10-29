import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { getFranchise } from "../services/franchise.service";
import FranchiseRegisterForm from "../components/sections/FranchiseRegisterForm";
import FranchiseCommitment from "../components/sections/FranchiseCommitment";

function Franchise({ franchise }) {
    console.log(franchise);
    const { title, image, commitment } = franchise;
    return (
        <div>
            <Breadcrumb title={title} image={image} />
            <FranchiseRegisterForm image={image} />
            <FranchiseCommitment commitment={commitment} />
        </div>
    );
}

export default Franchise;

export async function getServerSideProps() {
    const franchise = await getFranchise();
    return { props: { franchise } };
}
