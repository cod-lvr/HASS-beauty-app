import { Fragment } from "react/cjs/react.production.min";
import Brands from "../components/homePage/Brands";
import Container from "../components/homePage/Container";
import FeaturedProducts from "../components/homePage/FeaturedProducts";
import Hero from "../components/homePage/Hero";
import ProductType from "../components/homePage/ProductsType";
import Footer from "../ui/Footer";

function Home() {
    return(
        <Fragment>
            <Hero />
            <Brands />
            <ProductType />
            <Container />
            <FeaturedProducts />
            <Footer />
        </Fragment>
    )
}

export default Home;