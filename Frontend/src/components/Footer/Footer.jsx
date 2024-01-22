import hinh1 from './hinh1.png'
import hinh2 from './hinh2.png'
import hinh3 from './hinh3.png'
import hinh4 from './hinh4.png'
export default function Footer() {
  return (
    <>
      <div className='flex flex-nowrap justify-between color bg-denthui text-white pt-120 pb-85 px-152 w-full'>
        <div className=''>
          <div className='flex flex-col '>
            <div className='mb-30 '>
              <img
                src='https://i.pinimg.com/originals/35/7d/b1/357db15b9f94e58e5783d8e2313604df.png'
                className='w-50'
                alt=''
              />
            </div>
            <div className='mb-30 '>yummy@bistrobliss</div>
            <div className='flex flex-nowrap mb-30 gap-12'>
              <a href='#'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
                  <circle cx='17.5' cy='17.5' r='17.5' fill='#AD343E' />
                  <path
                    d='M25.2487 13.7333C24.7249 13.9661 24.172 14.1116 23.59 14.1989C24.172 13.8497 24.6376 13.2968 24.8413 12.6275C24.2884 12.9476 23.6773 13.1804 23.0081 13.3259C22.4843 12.773 21.7277 12.4238 20.9129 12.4238C19.3416 12.4238 18.0613 13.7042 18.0613 15.2755C18.0613 15.5083 18.0904 15.712 18.1486 15.9157C15.7916 15.7993 13.6673 14.6644 12.2415 12.9185C12.0087 13.355 11.8632 13.8206 11.8632 14.3443C11.8632 15.3337 12.3579 16.2067 13.1436 16.7304C12.678 16.7013 12.2415 16.585 11.8341 16.3813V16.4104C11.8341 17.8071 12.8235 18.971 14.1329 19.2329C13.9001 19.2911 13.6383 19.3202 13.3764 19.3202C13.2018 19.3202 12.9981 19.2911 12.8235 19.262C13.2018 20.3969 14.2493 21.2408 15.5006 21.2408C14.5112 21.9973 13.2891 22.4629 11.9505 22.4629C11.7177 22.4629 11.4849 22.4629 11.2812 22.4338C12.5616 23.2486 14.0456 23.7141 15.6752 23.7141C20.942 23.7141 23.8228 19.3493 23.8228 15.5665C23.8228 15.4501 23.8228 15.3046 23.8228 15.1882C24.3757 14.8099 24.8704 14.3152 25.2487 13.7333Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a href='#'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
                  <circle cx='17.5' cy='17.5' r='17.5' fill='#AD343E' />
                  <path
                    d='M15.883 25.3846V18.4427H13.5469V15.7373H15.883V13.7421C15.883 11.4268 17.2971 10.166 19.3626 10.166C20.352 10.166 21.2023 10.2397 21.4501 10.2726V12.6923L20.0176 12.6929C18.8943 12.6929 18.6768 13.2267 18.6768 14.01V15.7373H21.3558L21.007 18.4427H18.6768V25.3846H15.883Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a href='#'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
                  <circle cx='17.5' cy='17.5' r='17.5' fill='#AD343E' />
                  <path
                    d='M17.499 10.5639C19.7599 10.5639 20.0276 10.5724 20.9208 10.6131C21.4578 10.6197 21.9897 10.7183 22.4933 10.9046C22.8586 11.0455 23.1903 11.2613 23.4671 11.5381C23.744 11.8149 23.9597 12.1466 24.1006 12.5119C24.287 13.0156 24.3856 13.5475 24.3921 14.0845C24.4325 14.9776 24.4413 15.2453 24.4413 17.5062C24.4413 19.7671 24.4329 20.0349 24.3921 20.928C24.3856 21.465 24.287 21.9969 24.1006 22.5006C23.9597 22.8658 23.744 23.1976 23.4671 23.4744C23.1903 23.7512 22.8586 23.967 22.4933 24.1078C21.9897 24.2942 21.4578 24.3928 20.9208 24.3994C20.028 24.4397 19.7603 24.4486 17.499 24.4486C15.2377 24.4486 14.97 24.4401 14.0772 24.3994C13.5402 24.3928 13.0083 24.2942 12.5046 24.1078C12.1394 23.967 11.8077 23.7512 11.5308 23.4744C11.254 23.1976 11.0382 22.8658 10.8974 22.5006C10.711 21.9969 10.6124 21.465 10.6058 20.928C10.5655 20.0349 10.5567 19.7671 10.5567 17.5062C10.5567 15.2453 10.5651 14.9776 10.6058 14.0845C10.6124 13.5475 10.711 13.0156 10.8974 12.5119C11.0382 12.1466 11.254 11.8149 11.5308 11.5381C11.8077 11.2613 12.1394 11.0455 12.5046 10.9046C13.0083 10.7183 13.5402 10.6197 14.0772 10.6131C14.9704 10.5728 15.2381 10.5639 17.499 10.5639ZM17.499 9.03809C15.2006 9.03809 14.9111 9.04776 14.0079 9.08889C13.3051 9.10287 12.6097 9.23594 11.9514 9.48244C11.3867 9.69521 10.8752 10.0286 10.4526 10.4595C10.0214 10.8822 9.6877 11.394 9.4748 11.9591C9.2283 12.6174 9.09523 13.3127 9.08125 14.0155C9.04093 14.9179 9.03125 15.2074 9.03125 17.5058C9.03125 19.8042 9.04093 20.0937 9.08206 20.997C9.09604 21.6998 9.22911 22.3951 9.4756 23.0534C9.68827 23.6184 10.0217 24.1302 10.4526 24.553C10.8754 24.9839 11.3872 25.3174 11.9522 25.53C12.6105 25.7765 13.3059 25.9096 14.0087 25.9236C14.9119 25.9639 15.2002 25.9744 17.4998 25.9744C19.7994 25.9744 20.0877 25.9647 20.9909 25.9236C21.6937 25.9096 22.3891 25.7765 23.0474 25.53C23.6097 25.3121 24.1204 24.9791 24.5467 24.5525C24.973 24.1259 25.3056 23.6151 25.5232 23.0526C25.7697 22.3943 25.9028 21.699 25.9167 20.9962C25.9571 20.0937 25.9667 19.8042 25.9667 17.5058C25.9667 15.2074 25.9571 14.9179 25.9159 14.0147C25.9019 13.3119 25.7689 12.6166 25.5224 11.9582C25.3097 11.3932 24.9763 10.8815 24.5454 10.4587C24.1225 10.0277 23.6108 9.6943 23.0458 9.48163C22.3875 9.23513 21.6921 9.10206 20.9893 9.08809C20.0869 9.04776 19.7974 9.03809 17.499 9.03809Z'
                    fill='white'
                  />
                  <path
                    d='M17.4968 13.1621C16.6368 13.1621 15.7961 13.4171 15.081 13.8949C14.3659 14.3728 13.8086 15.0519 13.4794 15.8464C13.1503 16.641 13.0642 17.5153 13.232 18.3588C13.3998 19.2023 13.8139 19.9771 14.4221 20.5853C15.0302 21.1934 15.805 21.6075 16.6485 21.7753C17.492 21.9431 18.3663 21.857 19.1609 21.5279C19.9554 21.1988 20.6346 20.6414 21.1124 19.9263C21.5902 19.2112 21.8452 18.3705 21.8452 17.5105C21.8452 16.3572 21.3871 15.2512 20.5716 14.4357C19.7561 13.6202 18.6501 13.1621 17.4968 13.1621ZM17.4968 20.3331C16.9386 20.3331 16.3929 20.1675 15.9287 19.8574C15.4645 19.5472 15.1027 19.1064 14.8891 18.5907C14.6755 18.0749 14.6196 17.5074 14.7285 16.9598C14.8374 16.4123 15.1062 15.9094 15.501 15.5146C15.8957 15.1199 16.3986 14.8511 16.9462 14.7422C17.4937 14.6332 18.0612 14.6891 18.577 14.9028C19.0927 15.1164 19.5336 15.4782 19.8437 15.9424C20.1539 16.4065 20.3194 16.9522 20.3194 17.5105C20.3194 18.2591 20.022 18.977 19.4927 19.5064C18.9634 20.0357 18.2454 20.3331 17.4968 20.3331Z'
                    fill='white'
                  />
                  <path
                    d='M22.0318 14.0039C22.5929 14.0039 23.0479 13.549 23.0479 12.9878C23.0479 12.4266 22.5929 11.9717 22.0318 11.9717C21.4706 11.9717 21.0156 12.4266 21.0156 12.9878C21.0156 13.549 21.4706 14.0039 22.0318 14.0039Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a href='#'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
                  <circle cx='17.5' cy='17.5' r='17.5' fill='#AD343E' />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.2796 9.03809C13.7909 9.03809 10.1797 12.6493 10.1797 17.138C10.1797 20.7154 12.5084 23.7528 15.7146 24.8328C16.1196 24.9003 16.2546 24.6641 16.2546 24.4278C16.2546 24.2253 16.2546 23.7191 16.2546 23.0441C13.9934 23.5504 13.5209 21.9641 13.5209 21.9641C13.1496 21.0191 12.6096 20.7829 12.6096 20.7829C11.8672 20.2767 12.6771 20.2767 12.6771 20.2767C13.4871 20.3442 13.9259 21.1204 13.9259 21.1204C14.6346 22.3691 15.8158 21.9979 16.2883 21.7954C16.3558 21.2554 16.5583 20.9179 16.7946 20.7154C15.0059 20.5129 13.1159 19.8042 13.1159 16.6992C13.1159 15.8217 13.4196 15.0792 13.9596 14.5392C13.8921 14.3367 13.5884 13.5268 14.0271 12.3793C14.0271 12.3793 14.7021 12.1768 16.2546 13.223C16.8958 13.0543 17.6046 12.953 18.2796 12.953C18.9545 12.953 19.6633 13.0543 20.3045 13.223C21.857 12.1768 22.532 12.3793 22.532 12.3793C22.9707 13.493 22.7007 14.303 22.5995 14.5392C23.1057 15.113 23.4432 15.8217 23.4432 16.6992C23.4432 19.8042 21.5533 20.4791 19.7308 20.6816C20.0345 20.9179 20.2708 21.4241 20.2708 22.1666C20.2708 23.2466 20.2708 24.1241 20.2708 24.3941C20.2708 24.5966 20.4058 24.8666 20.8445 24.7991C24.0507 23.7528 26.3794 20.7154 26.3794 17.138C26.3794 12.6493 22.7682 9.03809 18.2796 9.03809Z'
                    fill='white'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-nowrap w-330 gap-120 text-16 not-italic'>
          <ul className=''>
            <li className='font-bold mb-40'>Page</li>

            <li className='font-normal mb-20'>Home</li>
            <li className='font-normal mb-20'>About</li>
            <li className='font-normal mb-20'>Menu</li>
            <li className='font-normal mb-20'>Pricing</li>
            <li className='font-normal mb-20'>Blog</li>
            <li className='font-normal mb-20'>Contact</li>
            <li className='font-normal mb-20'>Delivery</li>
          </ul>
          <ul className=''>
            <li className='font-bold mb-40'>Utility Pages</li>
            <li className='font-normal mb-20'>Start Here</li>
            <li className='font-normal mb-20'>Styleguide</li>
            <li className='font-normal mb-20'>Password Proteced</li>
            <li className='font-normal mb-20'>404 Not Found</li>
            <li className='font-normal mb-20'>Licenses</li>
            <li className='font-normal mb-20'>Changelog</li>
            <li className='font-normal mb-20'>View More</li>
          </ul>
        </div>
        <div className='w-403'>
          <div className='mb-40'>Follow Us On Instagram</div>
          <div className='flex flex-wrap gap-12'>
            <div className=''>
              <img src={hinh1} alt='hinh 1' className='rounded-lg' />
            </div>
            <div>
              <img src={hinh2} alt='hinh 2' className='rounded-lg' />
            </div>
            <div>
              <img src={hinh3} alt='hinh 3' className='rounded-lg' />
            </div>
            <div>
              <img src={hinh4} alt='hinh4' className='rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
