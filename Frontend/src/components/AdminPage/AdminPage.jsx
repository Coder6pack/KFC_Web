export default function AdminPage() {
  return (
    <>
      <div className="flex w-full">
        <ul className="w-244 bg-adminpage h-auto text-white">
            <div className="px-16 py-24 w-224 h-70">
            <a href="#" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute left-5"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg><p className=" font-bold text-center text-17">ADMIN PAGE</p>
            </a>
            </div>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-10"><path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z"/></svg>
              <div className="text-center text-15 w-244 h-56 px-16 py-16">
                <a href="#" >Dashboard</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-10"><path d ="M5.496 1.261l3.77 3.771c.409 1.889-2.33 4.66-4.242 4.242l-3.77-3.771c-.172.585-.254 1.189-.254 1.793 0 1.602.603 3.202 1.826 4.426 1.351 1.351 3.164 1.957 4.931 1.821.933-.072 1.852.269 2.514.931l7.621 7.611c.577.578 1.337.915 2.096.915 1.661 0 3.047-1.411 3.012-3.077-.016-.737-.352-1.47-.914-2.033l-7.621-7.612c-.662-.661-1.002-1.581-.931-2.514.137-1.767-.471-3.58-1.82-4.93-1.225-1.224-2.825-1.834-4.427-1.834-.603 0-1.207.09-1.791.261zm15.459 18.692c0 .553-.447 1-1 1-.553 0-1-.448-1-1s.447-1 1-1 1 .447 1 1z"/></svg>
            <div className="text-center text-15 w-244 h-56 px-16 py-16">
            <a href="#">Menu</a>
            </div>
            </li>
            <li className="border-b border-xamden relative">
              <div className="text-center text-15 w-244 h-56 px-16 py-16">
              <a href="#">Account</a>
              </div>
            </li>
        </ul>
        <div className="w-full h-full">
          <div className="h-70 mb-24 px-16 py-8 flex justify-between">
            <div className="text-left flex">
              <div>
              <input type="text" placeholder="Search for..." className="w-361 h-38 px-12 py-6 bg-payment"/>
              </div>
              <div>
              <button className="bg-adminpage w-60 h-38 rounded-r px-12 py-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg></button>
              </div>
            </div>
            <div className="flex flex-nowrap m-10 gap-20">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.04-1.82v-.003c0-1.172-.939-2.122-2.097-2.122s-2.097.95-2.097 2.122v.003c.002.751-.396 1.446-1.04 1.82-4.668 2.712-1.986 11.715-6.863 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm5.015-12.521c-.246-1.504-.933-3.682-2.817-5.515l1.396-1.434c1.8 1.752 2.974 4.044 3.395 6.626l-1.974.323zm-18.015-.322c.421-2.583 1.595-4.874 3.395-6.627l1.396 1.434c-1.884 1.833-2.572 4.011-2.817 5.515l-1.974-.322z"/></svg>
              </a>
              <a href="#"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
              </a>
              <div className="border-l h-25"></div>
              <div className="relative w-160 flex">
                <span>Lâm Hoài Nhơn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute right-5"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-1670 h-1494 px-24 bg-white pt-5">
            <h1 className="text-32 font-bold mb-24 ">Dashboard</h1>
            <div className="flex w-1628 h-41 px-16 py-8 border-t border-r border-l rounded-t-md bg-payment"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z"/></svg><div>DataTable</div></div>
            <div className="w-1628 h-auto px-16 py-16 border rounded-b-md">
            <div className="mb-10">
              <input type="text" placeholder="Search..." className="w-361 h-38 px-12 py-6 border border-xamden"/>
            </div>
            <table className="w-900 h-200 text-left ">
              <thead>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden">Start date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden">Start date</th>
                </tr>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden">Start date</th>
                </tr>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden">Start date</th>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  