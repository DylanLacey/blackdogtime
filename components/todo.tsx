'use client'

import { ChangeEvent, useState, useEffect} from "react"
import { Temporal } from "@js-temporal/polyfill"

const todoItemNames = ["bathed", "exercised", "drunk enough water"] as const

type ItemNames = typeof todoItemNames[number]

type TodoItems = {
    [key in ItemNames]: boolean
}

type TodoList = Record<string, TodoItems>

export function Todo({userStyles=""}: {userStyles: string}) {
    const today = Temporal.Now.plainDateISO().toString()
    const [todoList, setTodoList] = useState<TodoList>({})

    const saveToLocalStorage = () => {
        localStorage.setItem("todo_list", JSON.stringify(todoList))
    }

    useEffect(() => {
        const stored_list: TodoList = JSON.parse(localStorage.getItem('todo_list') || `{"${today}":{}}`)

        if (Object.keys(stored_list).length > Object.keys(todoList).length)   {
            setTodoList(stored_list)
        } else {
            saveToLocalStorage()
        }
    }, [todoList])

    const template = todoItemNames.reduce((acc, key, index) => {acc[key] = false; return acc}, {} as TodoItems)
    const todayList = {
        ...template,
        ...todoList[today]
    }

    function handleToggle(event: ChangeEvent) {
        todayList[event.target.id as ItemNames] = !todayList[event.target.id as ItemNames]

        setTodoList({
            ...todoList,
            [today]: todayList
        })
    }

    const list_items = todoItemNames.map(t => 
        <li key={t}>
            <input type="checkbox" id={t} name={t} checked={todayList[t]} onChange={handleToggle} />
            <label htmlFor={t}> {t} today?</label>
        </li>
    )

    return (
        <div id="todoList" className={userStyles + " h-full flex flex-col flex-auto gap-5 justify-start"}>
            <h3 className="pb-2">Have You...</h3>
            <ul className="">{list_items}</ul>
        </div>
    )
}