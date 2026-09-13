import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div className="container mx-auto py-4 px-8 items-center">
            <nav className="flex justify-between bg-base-100 ">
                <img src={Logo} alt="Logo" />
                <ul className="flex gap-4 items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="flex gap-4 items-center">
                    <button>Sign in</button>
                    <button className="btn btn-dash btn-secondary">Sign up</button>
                </div>
            </nav >
        </div >
    );
};

export default Nav;