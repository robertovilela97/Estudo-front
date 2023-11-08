import { FilterContext } from "@/contexts/filter-contexts"
import {useContext} from "react"

export function useFilter(){
    return useContext(FilterContext)
}