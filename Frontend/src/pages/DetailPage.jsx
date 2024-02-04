import Detail from '../components/Detail'
import { useParams } from 'react-router-dom'
export default function DetailPage() {
  const param = useParams()
  console.log(param)
  return (
    <div>
      <Detail />
    </div>
  )
}