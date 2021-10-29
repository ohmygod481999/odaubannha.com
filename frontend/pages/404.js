import Breadcrumb from "../components/Breadcrumb";
import Error404 from "../components/sections/Error404";

export default function Custom404() {
    return (
        <div>
            <Breadcrumb
                title="Trang Không tồn tại"
                items={[
                    {
                        title: "Home",
                    },
                    {
                        title: "404",
                    },
                ]}
            />
            <Error404 />
        </div>
    );
}
