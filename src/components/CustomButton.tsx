import React, { FC } from 'react'

interface propsButton {
  id: string,
  label: string,
  size: string,
  loading?: boolean,
}

const customButton: FC<propsButton> = ({ id, label, size, loading, ...props }) => {
  // console.log("dataConsole", props)
  return (
    <button id={id} disabled={loading} className={`rounded-md bg-greenLight max-w-full w-10/12 px-4 py-2 text-[16px] font-medium text-zinc-50 tracking-wide disabled:cursor-not-allowed disabled:bg-zinc-400 shadow-[6px_12px_24px_-1px_rgba(100,100,100,0.8)]`}{...props}>
      {label}
    </button>
  )
}

export default customButton
