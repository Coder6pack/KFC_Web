import { Link } from 'react-router-dom'

function TotalDetail(props) {
  const { value, border } = props
  const line = border ? 'border-y border-categoryBorder' : ''
  return (
    <div className={`py-12 flex justify-between ${line}`}>
      <h3>Subtotal:</h3>
      <h3>{value}</h3>
    </div>
  )
}
export default function CartTotal() {
  return (
    <div className='p-24 border border-categoryBorder rounded-lg w-424 h-296'>
      <h1 className='text-20 not-italic font-medium leading-30 mb-7'>Cart Total</h1>
      <TotalDetail value='$14.44' title='' />
      <TotalDetail border='true' value='Free' title='Shipping:' />
      <TotalDetail value='$84.00' title='Total:' />
      <Link to={'/payment'}>
        <button className='mt-20 font-semibold leading-5 px-40 py-16 text-white bg-button w-376 rounded-43'>
          Proceed to checkout
        </button>
      </Link>
    </div>
  )
}
