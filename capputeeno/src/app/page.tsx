"use client"

import Image from 'next/image'
import { FilterBar } from '@/components/filter-bar'
import styled from './page.module.css'
import { ProductsList } from '@/components/products_list'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Home(){
  const client = new QueryClient();
  return(
    <QueryClientProvider client={client}>
    <main className={styled.main}>
      <FilterBar/>
      <ProductsList/>
    </main>
    </QueryClientProvider>
  )
}