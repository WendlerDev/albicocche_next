/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

interface Logo {
    src:string
    alt: string
    width: any
    height: any
    priority: any
}

export default function Logo(props:Logo) {
    return (
        <div>
            <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
                priority>
            </Image>
        </div>
    )
}