import Navbar from "../../navbar/navbar";
import Hero from "../home/hero/hero"
import Cards from "./info/cards";
import Info from "./info/info";

export default function Home(){
    return(
        <>
            <Navbar />
            <Hero />
            <Cards />
            <Info />
        </>
    )
}