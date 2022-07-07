import SideBarMenu from '../SideBarMenu.js/SideBarMenu';
import "./SideBar.css"
import {
    AiOutlineHome,
    AiOutlineAppstore,
    AiOutlineApartment,
    AiOutlineSend,
    AiOutlineTeam,
    AiOutlineFundProjectionScreen,
    AiOutlineLogin,
    AiOutlineMenuFold,
} from 'react-icons/ai';


const Sidebar = () => {

    const menuItems = [
        {
            name: "Dashboard",
            icon: <AiOutlineHome />
        },
        {
            name: "Projects",
            icon: <AiOutlineAppstore />
        },
        {
            name: "Modules",
            icon: <AiOutlineApartment />
        },
        {
            name: "Sprint",
            icon: <AiOutlineSend />
        },
        {
            name: "Members",
            icon: <AiOutlineTeam />
        },
        {
            name: "Reports",
            icon: <AiOutlineFundProjectionScreen />
        },

    ]

    return (
        <section>
            <div className='sidebar'>
                <div className='sidebar_content'>
                    <div className="top_sidebar">
                        <div className='logo-icon'>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className='big-icon' cx="12" cy="16" r="10" stroke="#0075FF" strokeWidth="4" />
                                <circle className='small-icon' cx="25" cy="26" r="6" stroke="#1BE3A7" strokeWidth="4" />
                            </svg>
                        </div>
                        <h1 className='logo-text'>ChirKuut</h1>
                        <div className='bars'> <AiOutlineMenuFold /> </div>
                    </div>

                    {menuItems.map((item, index) => <SideBarMenu key={index} name={item.name} icon={item.icon} />)}

                </div>

                <div className='logout'>
                    <SideBarMenu name="Log out" icon={<AiOutlineLogin />} />
                </div>

            </div>

        </section>
    );
}

export default Sidebar;
