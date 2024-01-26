export default function Category(props) {
  const { title } = props
  return (
    <div className='w-306 text-center px-34 pt-40 pb-32 border-1.5 rounded-12 border-categoryBorder'>
      <svg
        className='inline-block'
        xmlns='http://www.w3.org/2000/svg'
        width='100'
        height='100'
        viewBox='0 0 100 100'
        fill='none'
      >
        <circle opacity='0.07' cx='50' cy='50' r='50' fill='#4D592B' />
        <path
          d='M37.1414 68.8498V72.3717C37.1414 73.0688 37.4183 73.7373 37.9112 74.2302C38.4041 74.7231 39.0726 75 39.7697 75H60.796C61.4931 75 62.1616 74.7231 62.6545 74.2302C63.1474 73.7373 63.4243 73.0688 63.4243 72.3717V68.8498C67.4197 66.5431 70.7375 63.2253 73.0443 59.2299C75.3511 55.2345 76.5656 50.7024 76.5657 46.0889C76.5657 45.3918 76.2888 44.7233 75.7959 44.2304C75.303 43.7375 74.6345 43.4606 73.9374 43.4606C73.8893 41.8514 73.429 40.2814 72.6007 38.9009C71.7724 37.5204 70.6038 36.3755 69.2065 35.5757C68.8715 33.2863 67.7224 31.1944 65.9701 29.6835C64.2178 28.1725 61.9796 27.3438 59.6658 27.3492C58.7786 27.3477 57.8949 27.4625 57.0375 27.6909C55.2285 25.9637 52.8235 25 50.3223 25C47.8211 25 45.4161 25.9637 43.607 27.6909C42.7496 27.4625 41.866 27.3477 40.9787 27.3492C38.6559 27.3311 36.405 28.1541 34.6417 29.6662C32.8784 31.1783 31.7218 33.2773 31.3855 35.5757C29.9833 36.3722 28.8094 37.5157 27.9764 38.8964C27.1433 40.2771 26.6791 41.8488 26.6283 43.4606C25.9312 43.4606 25.2627 43.7375 24.7698 44.2304C24.2769 44.7233 24 45.3918 24 46.0889C24.0001 50.7024 25.2146 55.2345 27.5214 59.2299C29.8282 63.2253 33.146 66.5431 37.1414 68.8498ZM34.8023 39.9387L36.9837 39.2553L36.5632 36.8899C36.5701 36.3238 36.6884 35.7646 36.9113 35.2443C37.1343 34.724 37.4576 34.2527 37.8628 33.8573C38.2679 33.4619 38.747 33.1502 39.2726 32.94C39.7982 32.7297 40.3601 32.6251 40.9262 32.632C41.6852 32.6277 42.4339 32.8081 43.1076 33.1577L45.2365 34.3404L46.5507 32.3167C46.9617 31.7041 47.5171 31.2021 48.168 30.855C48.8189 30.5079 49.5452 30.3263 50.2828 30.3263C51.0205 30.3263 51.7468 30.5079 52.3977 30.855C53.0486 31.2021 53.604 31.7041 54.015 32.3167L55.3292 34.3404L57.4581 33.1577C58.1318 32.8081 58.8805 32.6277 59.6395 32.632C60.7764 32.6177 61.8733 33.0504 62.6942 33.837C63.5152 34.6235 63.9944 35.7009 64.0288 36.8373L63.6083 39.0713L65.7634 39.8073C66.5585 40.0561 67.261 40.5368 67.7808 41.1878C68.3007 41.8387 68.6141 42.6302 68.6808 43.4606H31.8849C31.9516 42.6302 32.265 41.8387 32.7849 41.1878C33.3047 40.5368 34.0072 40.0561 34.8023 39.8073V39.9387ZM71.1514 48.7172C70.7129 52.1582 69.4299 55.4372 67.4167 58.2621C65.4036 61.087 62.7228 63.3699 59.6133 64.9074C59.1758 65.1278 58.8087 65.4661 58.5533 65.884C58.2978 66.302 58.1643 66.783 58.1677 67.2728V69.7434H42.398V67.2728C42.4014 66.783 42.2679 66.302 42.0124 65.884C41.757 65.4661 41.3899 65.1278 40.9524 64.9074C37.8429 63.3699 35.1621 61.087 33.149 58.2621C31.1358 55.4372 29.8528 52.1582 29.4143 48.7172H71.1514Z'
          fill='#474747'
        />
      </svg>
      <h3 className='mt-30 mb-15 text-24 not-italic font-bold leading-30 tracking-0.72'>{title}</h3>
      <p className='mb-30 text-16 not-italic font-normal text-categoryText leading-6'>
        In the new era of technology we look in the future with certainty and pride for our life.
      </p>
      <a href='#' className='text-button text-16 not-italic font-bold leading-6'>
        Explore Menu
      </a>
    </div>
  )
}
