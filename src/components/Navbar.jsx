import { Anchor } from 'antd';
import '../assets/style/main.css';
const { Link } = Anchor;

function Navbar() {
    return (
        <nav className="navbar">
            <Anchor

                // style={{ background: "#FFFFFF" }}
                className='anchor-body'
                direction="horizontal">
                <div className='div-nav'>
                    <div className="div-cv">L.Tanet</div>
                    <div className="nav-links ">
                        <Link href="#Home" title="Home" className='label-navber' />
                        <Link href="#Skill" title="Skill" className='label-navber' />
                        <Link href="#Portfolio" title="Portfolio" className='label-navber' />
                    </div>
                </div>
            </Anchor>
        </nav>
    );
}

export default Navbar;
