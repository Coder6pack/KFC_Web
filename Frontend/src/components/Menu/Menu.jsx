import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Foods from '../Foods'
import { getFoods } from '../../apis/foods.api'

export default function Menu() {
  const { data } = useQuery({
    queryKey: ['food'],
    queryFn: () => getFoods(),
    staleTime: 5 * 6 * 1000,
    refetchOnWindowFocus: true
  })
  console.log(data)
  return (
    <div className='flex flex-wrap justify-center gap-3 mb-100'>
      {data.data.data.map((food) => (
        <Link key={food.id} to={`/menu/${food.id}/detail`}>
          <Foods name={food.name} />
        </Link>
      ))}
    </div>
  )
}
