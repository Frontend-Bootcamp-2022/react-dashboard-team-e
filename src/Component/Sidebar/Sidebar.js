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
        <div className='sidebar'>
            <div className='sidebar_content'>
                <div className="top_sidebar">
                    <div className='logo-icon'>

                    </div>
                    <h1 className='logo-text'>ChirKuut</h1>
                    <div className='bars'>

                    </div>
                </div>

            </div>

            <div className='logout'>

            </div>



        </div>
    );
}

export default Sidebar;
