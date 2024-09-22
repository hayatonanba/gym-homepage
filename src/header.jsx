import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-300'>
        <header className='flex justify-between'>
            <h2 className='text-5xl p-4'>Fitness Method</h2>
            <div className='p-4'>
                <label>Search:<input type="search" /></label>
                <input type="submit" value="検索" />
            </div>
        </header>
    </div>
  )
}
