import LoginPage from "../pages/Login/LoginPage";
import PasswordPage from "../pages/Password/PasswordPage";
import RegisterPage from "../pages/Register/RegisterPage";

export const routingData = [
    {
        path:"/",
        component:<LoginPage/>
    },
    {
        path:"/register",
        component:<RegisterPage/>
    },
    {
        path:"/password",
        component:<PasswordPage/>
    },
    {
        path:"/artist",
        component:<ArtistGridPage/>
    },
]