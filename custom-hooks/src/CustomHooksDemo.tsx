import useCustom from "./useCustom"
// @ts-ignore
import wcc from "world-countries-capitals"
const CustomHooksDemo = () => {


  const example = wcc.getRandomCountry()

  const value = useCustom()
  return (
    <div>{value} - {example}</div>
  )
}

export default CustomHooksDemo