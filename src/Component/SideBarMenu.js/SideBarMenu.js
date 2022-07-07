import "./SideBarMenu.css"

const SideBarMenu = ({ name, icon }) => {

    return (
        <a href='/#' className="link" >
            <div className="link_icon">{icon}</div>
            <div className="link_text">{name}</div>
        </a>
    )

}

export default SideBarMenu;
