
type AccordionProps = {
  items: AccordionItem[]
}

export type AccordionItem = {
  title: string
  content: string
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <details key={index}>
          <summary>{item.title}</summary>
          <p>{item.content}</p>
        </details>
      ))}
    </div>
  )
}

export default Accordion