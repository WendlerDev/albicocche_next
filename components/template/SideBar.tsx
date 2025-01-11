import { HomeIcon, LogOutIcon, NotifIcon, SettingsIcon } from "../icons/icons"
import Logo from "./Logo"
import MenuItem from "./MenuItems"

export default function SideBar() {
    return (
        <aside
            className={`
             dark:bg-gray-900
             dark:text-gray-200
             bg-gray-100
             text-gray-800
             flex flex-col
            `}>
            <div
                className={`
                    h-20 w-20
                    bg-gradient-to-r from-orange-500 to-orange-200
                    flex flex-col
                    items-center
                    justify-center
                `}
            >
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" text="Home" icon={HomeIcon} />
                <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Notifications" icon={NotifIcon} />
            </ul>
            <ul>
                <MenuItem
                    className={`
                        hover:bg-red-400 
                        hover:text-white
                        flex flex-col
                        items-center
                        justify-center
                        w-20 h-20
                        `}
                    url=""
                    text="LogOut"
                    icon={LogOutIcon}
                />
            </ul>
        </aside>
    )
}