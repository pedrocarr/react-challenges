import { useEffect, useState } from "react";



export default function useCustom() {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue('updated')
  }, [])


  return value
}