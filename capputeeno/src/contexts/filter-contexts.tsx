"use client"
import { FilterType } from "@/types/filter-types";
import { PriorityTipes } from "@/types/priority-types";
import { setPriority } from "os";
import React, { ReactNode, createContext, use, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTipes.NEWS,
    setPriority: (value: PriorityTipes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})


interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({children} : ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTipes.NEWS)

    return(
        <FilterContext.Provider 
        value={{
            search, 
            page, 
            type, 
            priority,
            setPriority,
            setSearch, 
            setType, 
            setPage
            }}>
            {children}
        </FilterContext.Provider>
    )
}