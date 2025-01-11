interface TitleProps {
    title: string
    subtitle: string
}
export default function Layout(props: TitleProps) {
    return (
        <div>
            <h1
                className={`
                    font-black
                    text-3xl
                    text-gray-800
                `}>
                {props.title}
            </h1>
            <h2
                className={`
                    font-light
                    text-sm
                    text-gray-400
                `}>
                {props.subtitle}
            </h2>
        </div>
    )
}