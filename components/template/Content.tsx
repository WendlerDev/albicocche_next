/* eslint-disable @typescript-eslint/no-explicit-any */
interface ContentProps {
    children?: any
}

export default function Layout(props: ContentProps) {
    return (
        <div className={`
            flex flex-col mt-7
            text-gray-800
            dark:text-gray-200
        `}> {props.children}
        </div>
    )
}