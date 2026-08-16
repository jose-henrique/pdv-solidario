import React from 'react'
import SideBar from './SideBar'

export default function AppLayoutDesktop({ children }){
    return (
        <div className="flex min-h-screen bg-slate-100">
            <SideBar />

            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    )
}