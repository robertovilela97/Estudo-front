import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"

interface FilterByPriorityProps{

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;

        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
        position: absolute;
        width: 250px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 12px 16px;
        background: #FFFFFF;

        list-style: none;

        top: 100%;

        li {
            color: var(--text-dark);
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            cursor: pointer;
        }

        li + li{
            margin-top: 4px;
        }

`

export function FilterByPriority(props: FilterByPriorityProps){
    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpen = () => setIsOpen(prev => !prev)

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li>Novidades</li>
                <li>Preço: Maior - menor</li>
                <li>Preço: Menor - maior</li>
                <li>Mais vendidos</li>
            </PriorityFilter>}
        </FilterContainer>
    )
}