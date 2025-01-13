/* eslint-disable @typescript-eslint/no-explicit-any */
interface AuthInputProps {
    label: string
    value: any
    type?:'text' | 'email' | 'password'
    required: boolean
    onChangeValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`
            flex
            flex-col
            mt-4`
        }>
            <label>{props.label}</label>
            <input 
            type={props.type ?? 'text'}
            value={props.value}
            required={props.required}
            className={`
                px-4
                py-3
                mt-2
                rounded-lg
                bg-blue-200
                hover:bg-blue-100
                transition-all duration-300 ease-in-out
                border-none
                focus:bg-white
                focus: outline-1
                `}
            onChange={e => props.onChangeValue?.(e.target.value)}></input>
        </div>
    )
}