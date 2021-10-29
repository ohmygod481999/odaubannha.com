import React from "react";
import Image from "next/image";

function Cta() {
    return (
        <div className="cta-icons">
            <a
                href="https://zalo.me/0899498998"
                className="cta-icons-promotion"
            >
                <Image
                    width={45}
                    height={45}
                    className="responsive"
                    src="https://file.hstatic.net/200000043306/file/zalo_sharelogo_c2a3e42007004094aa1b9c287e12d4e3.png"
                    alt={"zalo"}
                />
            </a>
            <a href="tel:0899498998" className="cta-icons-phone">
                <Image
                    width={45}
                    height={45}
                    className="responsive"
                    src="https://file.hstatic.net/200000043306/file/phone_a970c3f8b9cb462a92989d06d98c77df.svg"
                    alt="phone"
                />
            </a>
            <a
                href="https://m.me/104699810992243"
                rel="noreferrer"
                target="_blank"
                className="cta-icons-promotion"
            >
                <Image
                    width={45}
                    height={45}
                    className="responsive"
                    src="https://file.hstatic.net/200000043306/file/mess_34e621afba3f4abeb696856b1505469d.svg"
                    alt="mess"
                />
            </a>
        </div>
    );
}

export default Cta;
