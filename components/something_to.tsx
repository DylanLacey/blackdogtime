'use client'

import { ChangeEvent, useState, useEffect} from "react"
import { Temporal } from "@js-temporal/polyfill"
import { PropsWithChildren } from "react"

type SomethingToProps = {
    name: String
}

// type ItemNames = typeof todoItemNames[number]

// type TodoItems = {
//     [key in ItemNames]: boolean
// }

// type SomethingTo = Record<string, TodoItems>
// type SomethingToProps

export function SomethingTo(props: PropsWithChildren<SomethingToProps>) {

    return (
        <div className="flex flex-col grow items-end">
            <div className="">Something to</div>
            <h2 className="h4">{props.name}</h2>
            <hr className="h-px w-full p-0 mb-4"/>
            <div className="self-start">BEES</div>

        </div>
    )
}