import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { getChainStore } from "../services/chain-store.service";
import { getAddresses } from "../services/address.service";
import { getRegions } from "../services/region.service";
import Contact from "../components/sections/Contact";

function ChainStore({ chainStore, addresses = [], regions }) {
    const { title, image, contact } = chainStore;

    const bindingRegions = regions.map((region) => ({
        ...region,
        addresses: addresses.filter(
            (address) => address.region && (address.region.id === region.id)
        ),
    }));

    return (
        <>
            <Breadcrumb title={title} image={image} />
            <div
                className="section small_pt"
                style={{
                    paddingBottom: 50,
                }}
            >
                <div className="container">
                    <div className="row">
                        {bindingRegions.map((region) => (
                            <div
                                key={region.id}
                                className="col-lg-6 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.2s"
                            >
                                <div className="heading_s1">
                                    <h2>{region.title}</h2>
                                </div>
                                <ul className="ml-4">
                                    {region.addresses.map((address, i) => (
                                        <li key={address.id} className="mb-3">
                                            <strong>Cơ sở {i + 1}</strong>:{" "}
                                            {address.address}
                                            <br />
                                            <strong>Số điện thoại</strong>:
                                            {address.mobile}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section p-0">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div
                            className="col-12 animation animated fadeInUp"
                            data-animation="fadeInUp"
                            data-animation-delay="0.2s"
                            style={{ animationDelay: "0.2s", opacity: 1 }}
                        >
                            <div className="map">
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193229.77301255226!2d-74.05531241936525!3d40.823236500441624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW+123rd+St%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1533565007513"
                                    allowFullScreen
                                /> */}
                                <iframe
                                    src="https://maps.google.com/maps?q=20.996336,105.871104&hl=es&z=14&amp;output=embed"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact contact={contact}/>
        </>
    );
}

export default ChainStore;

export async function getServerSideProps() {
    const [chainStore, addresses, regions] = await Promise.all([
        getChainStore(),
        getAddresses(),
        getRegions({
            _limit: 2,
        }),
    ]);
    return { props: { chainStore, addresses, regions } };
}
