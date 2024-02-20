import { Link } from 'react-router-dom'
import Foods from '../Foods'
import { useGetFoodQuery } from '../food.service'

export default function Menu() {
  const { data, isFetching } = useGetFoodQuery()

  return (
    <div className='flex flex-wrap justify-center gap-3 mb-100'>
      {isFetching && ''}
      {!isFetching &&
        data.data?.map((food) => (
          <Link key={food.id} to={`/menu/${food.id}/detail`}>
            <Foods name={food.name} />
          </Link>
        ))}
    </div>
  )
}
