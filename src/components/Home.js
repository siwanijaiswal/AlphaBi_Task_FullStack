import { useContext } from "react";
import { UserContext } from "../context/user";
import { Search } from "./Search";
import { WelcomePage } from "./page/WelcomePage";
import { Footer } from "../Footer";

export const Home = () => {
    const { currentUser } = useContext(UserContext)
    return (
        <div className="flex flex-col min-h-screen flex-wrap">
            <div className="flex-grow">
                {currentUser ? <Search /> : <WelcomePage />}
            </div>
            <Footer />
        </div>
    );
};

