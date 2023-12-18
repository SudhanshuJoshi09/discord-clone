import {
    UserButton
}
from "@clerk/nextjs";

import NavBar from "../../components/Navbar";
import {
    ModeToggle
}
from "@/components/mode-toggle";

export default function Home() {
    return(<div> <UserButton> afterSignOutUrl="/" </UserButton> <ModeToggle/> </div>)
}
