"use client"

import Image from 'next/image'
import { FilterBar } from '@/components/filter-bar'
import styled from './page.module.css'

export default function Home(){
  return(
    <main className={styled.main}>
      <FilterBar/>
    </main>
  )
}