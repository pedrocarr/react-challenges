import { useEffect, useState } from 'react';


const useCustom = () => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue("now is working normally!")
  }, [])
  return value

}


export default useCustom;