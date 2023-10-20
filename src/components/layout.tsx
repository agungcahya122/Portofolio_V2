import React, { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className='w-full h-screen overflow-auto'>
      <div className='h-full overflow-auto bg-white'>{children}</div>
    </div>
  )
}

export default layout
