import useAppData from "@/data/hook/useAppData"
import Title from "./Title"
import ToggleButton from "./ToggleButton"
import UserAvatar from "./UserAvatar"

interface TopBarProps {
    title: string
    subtitle: string
}

export default function TopBar(props: TopBarProps) {
    const theme = useAppData()
    return (
        <div className="flex ">
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex
             flex-grow
             justify-end
             items-center
             space-x-4">
                <ToggleButton onToggle={theme.toggleTheme}></ToggleButton>
                <UserAvatar></UserAvatar>
            </div>
        </div>
    )
}