import React from 'react'
import { SearchBox } from './SearchBox'
import { Sidebar } from './Sidebar'

export const InboxPeople = () => {
  return (
    
        <div className="inbox_people">
        {/* Inbox people inicio */}

            <SearchBox/>
            <Sidebar/>

        {/* Inbox people Fin */}
        </div>

  )
}
