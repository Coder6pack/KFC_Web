export default function Button(props) {
  const { hover, content } = props
  const bg = hover ? 'hover:bg-button hover:text-white' : ''
  return (
    <button className={`border px-32 py-20 text-16 not-italic font-bold leading-6 rounded-118 ${bg}`}>{content}</button>
  )
}
