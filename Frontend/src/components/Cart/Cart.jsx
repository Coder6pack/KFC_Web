import food2 from '../../assets/images/food/food2.png'
import { GrSubtractCircle, GrAddCircle, GrClose } from 'react-icons/gr'
export default function Cart() {
  return (
    <div className='w-832 h-100 flex items-center mb-3 border-b border-b-categoryBorder'>
      <div className='flex items-center gap-3'>
        <img src={food2} />
        <h3>Green Capsicum</h3>
      </div>
      <div className='flex items-center pl-135'>
        <h3 className='text-center'>$14.00</h3>
        <div className='flex items-center ml-65 text-center p-2 border border-categoryBorder rounded-175 justify-center'>
          <div className='w-34 text-center flex items-center justify-center '>
            <button>
              <GrSubtractCircle />
            </button>
          </div>
          <h3 className='w-40'>0</h3>
          <div className='w-34 text-center flex items-center justify-center '>
            <button>
              <GrAddCircle />
            </button>
          </div>
        </div>
        <div className='ml-62 flex justify-between w-150 items-center'>
          <h3>$70.00</h3>
          <button>
            <GrClose />
          </button>
        </div>
      </div>
    </div>
  )
}
