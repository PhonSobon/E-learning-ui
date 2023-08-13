'use client';

import {Button, Navbar} from 'flowbite-react';
import Image from "next/image";
import {AiFillDashboard} from "react-icons/ai";
import EHandleThemeMode from "@/components/EHandleThemeMode";
import {FaUserPlus} from "react-icons/fa";
import {IoLogInOutline} from "react-icons/io5";
import Link from "next/link";
import {router} from "next/client";

export default function NavbarWithDropdown() {
    return (
        <Navbar
            className={"cus-navbar dark:bg-gray-900 sticky top-0 left-0 z-50"}
        >
            <Navbar.Brand href="/" as={Link}>
                <Image
                    unoptimized
                    width={100}
                    height={100}
                    alt="Logo"
                    className="mr-3 w-10 h-10 object-contain rounded-full"
                    src="/images/profile.jpg"
                />
                <span className="self-center font-extrabold whitespace-nowrap text-md sm:text-xl  text-blue-800 dark:text-blue-600">
                    CodeCrafter
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-2">
                <EHandleThemeMode/>
                <div className={"flex items-center gap-2 btn-auth"}>
                    {(() => {
                        // if (session){
                        //     return (
                        //         <Button
                        //             pill
                        //             onClick={handleDashboard}
                        //         >
                        //        <span className={"lg:px-3 uppercase flex gap-2"}>
                        //            <AiFillDashboard className={"h-5 w-5 lg:mr-2"} />
                        //             <span className={"hidden lg:inline"}>Dashboard</span>
                        //         </span>
                        //         </Button>
                        //     )
                        // }
                        return (
                            <>
                                <Button pill
                                        onClick={() => router.push("/sign-up")}
                                >
                                <span className={"lg:px-3 uppercase flex gap-2"}>
                                    <FaUserPlus className="h-5 w-5" />
                                    <span className={"hidden lg:inline"}>Sign Up</span>
                                </span>
                                </Button>
                                <Button outline pill
                                        onClick={() => router.push("/sign-in")}
                                >
                                <span className={"lg:px-3 uppercase flex gap-2"}>
                                    <IoLogInOutline className="h-5 w-5" />
                                    <span className={"hidden lg:inline"}>Sign In</span>
                                </span>
                                </Button>
                            </>
                        )
                    })()}
                </div>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    // active={pathname.includes("feature")}
                    href="/feature"
                    as={Link}
                >
                    Feature
                </Navbar.Link>
                <Navbar.Link
                    // active={pathname.includes("report")}
                    href="/report" as={Link}>
                    Report
                </Navbar.Link>
                <Navbar.Link
                    // active={pathname.includes("vote")}
                    href="/votes" as={Link}>
                    Vote
                </Navbar.Link>
                <Navbar.Link
                    // active={pathname.includes("feedback")}
                    href="/feedback" as={Link}>
                    Feedback
                </Navbar.Link>
                <Navbar.Link
                    // active={pathname.includes("about-us")}
                    href="/about-us" as={Link}>
                    About Us
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


