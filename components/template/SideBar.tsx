import { HomeIcon, LogOutIcon, NotifIcon, SettingsIcon } from "../icons/icons"
import Logo from "./Logo"
import MenuItem from "./MenuItems"

export default function Layout() {
    return (
        <aside className={`flex flex-col`}>
            <div className={`
                h-20 w-20
                bg-gradient-to-r from-orange-500 to-orange-200
                flex flex-col
                items-center
                justify-center
                `}>
                    <Logo />
            </div>
            <ul className={`
                flex-grow
                `}>
                <MenuItem url="/" text="Home" icon={HomeIcon} />
                <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Notifications" icon={NotifIcon} />
            </ul>
            <ul>
                <MenuItem className={`text-red-600 hover:bg-red-400 hover:text-white`} url="" text="LogOut" icon={LogOutIcon}/>
            </ul>
        </aside>
    )
}