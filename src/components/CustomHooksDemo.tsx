import useCustom from "../custom-hooks/useCustom"

const CustomHooksDemo = () => {

  const value = useCustom()
  return (
    <div>{value}</div>
  )
}

export default CustomHooksDemo