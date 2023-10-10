import React, { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className='w-full h-full overflow-auto'>
      <div className='h-full overflow-auto'>{children}</div>
    </div>
  )
}

export default layout
