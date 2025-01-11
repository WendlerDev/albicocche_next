import useAppData from "@/data/hook/useAppData"
import Title from "./Title"
import ToggleButton from "./ToggleButton"

interface TopBarProps {
    title: string
    subtitle: string
}

export default function TopBar(props: TopBarProps) {
    const theme = useAppData()
    return (
        <div className="flex ">
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow justify-end">
                <ToggleButton onToggle={theme.toggleTheme}></ToggleButton>
            </div>
        </div>
    )
}