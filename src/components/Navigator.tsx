import {Link, useRoute} from "wouter";
import cn from "../libs/cn";

interface NavigationItemProp {
    name: string
    href: string
}

const NavigationItem = ({
                            name,
                            href
                        }: NavigationItemProp) => {
    const [isCurrent] = useRoute(href)
    return <li
        className={"flex grow items-center justify-center group"}>
        <label
            className={cn("group-hover:-translate-y-0.5 transition duration-500", isCurrent ? "text-gray-600" : null)}>
            <Link href={href}>{name}</Link>
        </label>
    </li>
}
const Navigator = () => {
    return <nav className={"flex w-full h-12 p-2 bg-black text-white font-bold text-2xl"}>
        <NavigationItem href="/cv" name={"이력"}/>
        <NavigationItem href="/" name={"홈"}/>
        <NavigationItem href="/projects" name={"프로젝트"}/>
    </nav>
}

export default Navigator
