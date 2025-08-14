import useCustom from "./useCustom"

const CustomHooksDemo = () => {

  const value = useCustom()
  return (
    <div>{value}</div>
  )
}

export default CustomHooksDemo