import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <Image
                src="/teste.svg"
                alt="Logo Albicocche"
                width={60}
                height={60}
                priority>
            </Image>
        </div>
    )
}