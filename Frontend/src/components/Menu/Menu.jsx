import { Link } from 'react-router-dom'
import Foods from '../Foods'
export default function Menu() {
  return (
    <div className='flex flex-wrap justify-center gap-3 mb-100'>
      <Link to={'/menu/1/detail'}>
        <Foods />
      </Link>
      <Link to={'/menu/2/detail'}>
        <Foods />
      </Link>
      <Link to={'/menu/3/detail'}>
        <Foods />
      </Link>
      <Link to={'/menu/4/detail'}>
        <Foods />
      </Link>
    </div>
  )
}
