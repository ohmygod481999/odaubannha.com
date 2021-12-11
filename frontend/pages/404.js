import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import Error404 from "../components/sections/Error404";

export default function Custom404({generalInfo}) {
    return (
        <div>
            <Header generalInfo={generalInfo} />
            <Error404 />
        </div>
    );
}
