import logo from "../assets/logo.png"

export const Header = () => {

    return (
        <header className="bg-[#0d0d0d] py-16 flex justify-center">
            <img src={logo} alt="Application Logo" className="w-[40%]"/>
        </header>
    )
}
