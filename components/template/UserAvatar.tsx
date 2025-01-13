/* eslint-disable @next/next/no-img-element */
import useAuth from "@/data/hook/useAuth";
import Link from "next/link";

export default function UserAvatar() {

    const {user} = useAuth()

    return(
        <Link href={'/profile'}>
            <img
            src={user?.imageUrl ?? '/avatar.png'} 
            alt={"User Avatar"}
            width={60}
            height={60}
            className={`
                items-center
                h-10
                w-10
                rounded-full
                cursor-pointer
                `}>                
            </img>
        </Link>
    )
}