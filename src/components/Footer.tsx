import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4">

                {/* Logo + Copyright */}
                <div>
                    <a href="#" className="shrink-0">
                        <img
                            src={Logo}
                            alt="Dev Stack Builder"
                            className="h-9 w-auto sm:h-10"
                        />
                    </a>
                    <p className="mt-2 text-sm">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    {/* Social Links */}
                    <div className="mt-4 flex flex-wrap gap-3">
                        <a
                            href="#"
                            className="btn btn-sm btn-outline btn-primary"
                        >
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="btn btn-sm btn-outline btn-secondary"
                        >
                            Twitter
                        </a>

                        <a
                            href="#"
                            className="btn btn-sm btn-outline btn-accent"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>



                {/* Product Links */}
                <div>
                    <span className="footer-title">Product</span>

                    <ul className="mt-3 space-y-2">
                        <li>
                            <a href="#" className="link link-hover">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#technologies" className="link link-hover">
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a href="#" className="link link-hover">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <span className="footer-title">Company</span>

                    <ul className="mt-3 space-y-2">
                        <li>
                            <a href="#" className="link link-hover">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className="link link-hover">
                                Contact
                            </a>
                        </li>

                        <li>
                            <a href="#" className="link link-hover">
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal + Social */}
                <div>
                    <span className="footer-title">Legal</span>

                    <ul className="mt-3 space-y-2">
                        <li>
                            <a href="#" className="link link-hover">
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="link link-hover">
                                Terms of Service
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </footer>
    );
};

export default Footer;