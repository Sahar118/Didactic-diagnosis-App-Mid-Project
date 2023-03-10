import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";


const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;