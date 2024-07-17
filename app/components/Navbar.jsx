'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import GoogleTranslate from './GoogleTranslate'
import FilterContext from '../context/filterContext'
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar"

const Navbar = () => {

    const context = useContext(FilterContext);
    const { user, googleSignIn, logOut } = context;
    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {

        }
    }
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {

        }
    }

    return (
        <div className=''>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/" className='text-xl text-white font-bold'>CareerCanvas</Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block w-full">
                                <div className="flex justify-between">
                                    <div className='flex space-x-4'>
                                        <Link href="/dashboard" className="bg-gray-900 text-white rounded-md px-5 py-2 text-sm font-medium" aria-current="page">Explore</Link>
                                        <Link href="/discussion" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Discussion</Link>
                                    </div>
                                    <div className='space-x-4 flex'>
                                        <GoogleTranslate />
                                        {!user ? (<Button className='bg-white text-black px-4 py-2.5 hover:bg-gray-200' onClick={handleSignIn}>Log in</Button>) : (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Avatar className='hover:cursor-pointer'>
                                                        <AvatarImage src={user.photoURL} alt="@shadcn" />
                                                        <AvatarFallback>CN</AvatarFallback>
                                                    </Avatar>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-56">
                                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>My Discussions</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem onClick={handleSignOut}>
                                                        Log out
                                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        </div>
                    </div>
                </div>


                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">

                        <Link href="/dashboard" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</Link>
                        <Link href="/team" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</Link>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar