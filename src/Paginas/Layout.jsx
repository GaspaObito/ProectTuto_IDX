import { Outlet } from "react-router-dom";
const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/about">Home</link>
                </li>
                <li>
                    <link to="/dashboard">Dashboard</link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}
export default Layout