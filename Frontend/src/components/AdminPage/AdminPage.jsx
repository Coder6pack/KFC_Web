export default function AdminPage() {
  return (
    <>
      <div className="flex w-full">
        <ul className="w-244 bg-adminpage h-auto text-white">
            <div className="px-16 py-24 w-224 h-70">
            <a href="#" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute left-3"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg><p className=" font-bold text-center text-17">ADMIN PAGE</p>
            </a>
            </div>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z"/></svg>
              <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#">Dashboard</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 left-7"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-4 11.25c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.248c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.252c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75z" fill-rule="nonzero"/></svg>
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
            <a href="#">Món ăn</a>
            </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 left-7"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
              <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
              <a href="#">Loại món ăn</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/></svg>
              <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Images</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>              <div className="text-center text-15 w-244 h-56 px-16 py-16">
                <a href="#" >Người dùng</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className="absolute top-3 left-7"><path d="M10.409 0c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v11.515l-4.801-4.801c.507-.782.801-1.714.801-2.714 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.037 0 2-.316 2.799-.858l4.858 4.858h-18.657v-24h8.409zm2.591 12c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm1.568-11.925c2.201 1.174 5.938 4.884 7.432 6.882-1.286-.9-4.044-1.657-6.091-1.18.222-1.468-.186-4.534-1.341-5.702z"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Hóa đơn</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Chi tiết hóa đơn</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 left-7"><path d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm9.259-8.11s-2.136.002-4.616.003c-.414 0-.75.336-.75.75-.001 2.479-.003 4.612-.003 4.612 0 .411.335.745.75.745.414 0 .75-.334.75-.745v-2.804l4.549 4.549c.293.293.768.293 1.061 0s.293-.768 0-1.061l-4.549-4.549h2.808c.409 0 .741-.336.741-.75s-.333-.75-.741-.75zm1.241-3.89v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z" fill-rule="nonzero"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Related</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className="absolute top-3 left-7"><path d="M5 23h-2v-10l8.991-8.005c1.124.998 2.25 1.997 3.378 2.996l2.255 1.997c1.127.999 2.252 2.013 3.376 3.012v10h-2v-9.118l-7.009-6.215-6.991 6.22v9.113zm2-2h10v2h-10v-2zm0-3h10v2h-10v-2zm10-3v2h-10v-2h10zm-5-14l12 10.632-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.493 12-10.632z"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Kho</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Yêu thích</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M11.476 8.853c-.469-.288-.616-.903-.328-1.372l3.004-5.004c.191-.312.517-.477.849-.477.776 0 1.259.855.851 1.519l-3.005 5.005c-.294.479-.91.611-1.371.329zm3.426.147l-.351.569c-.548.896-1.503 1.431-2.553 1.431-1.202 0-2.359-.72-2.812-2h-9.186v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2h-9.098zm-5.902 9c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm4 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm4 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4z"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Giỏ hàng</a>
              </div>
            </li>
            <li className="border-b border-xamden relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute top-3 left-7"><path d="M21.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.163-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.313-.44-.211-1.051.229-1.365.439-.314 1.049-.211 1.363.229l2.382 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.953-.167 1.469.329 2.047 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.334-1.121-1.676-1.583-2.629-.902-.955.682-.952 2.1-.002 2.779-.236-.703.034-1.444.644-1.879zm5.644-7.219h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-5.858-3.26c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.721.298l-4.701 4.702h2.883l3.26-3.26zm.184 16.26h-3.533l-3.613-9h16.522l-1.381 3.44c.803-.144 1.282-.252 2.153.002l1.067-2.657c.236-.48.724-.785 1.258-.785h.642v-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h4.086c-.004-.79.273-1.456.799-2z"/></svg>              
            <div className="text-center text-15 w-244 h-56 px-16 py-16 hover:bg-google">
                <a href="#" >Chi tiết giỏ hàng</a>
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
            <div className="mb-10 flex justify-between w-900">
              <div>
              <input type="text" placeholder="Search..." className="w-361 h-38 px-12 py-6 border border-xamden"/>
              </div>
              <div className="">
                <a href="#" className="border px-12 py-6 rounded-full bg-xamden text-white font-bold">Thêm mới</a>
              </div>
            </div>
            <table className="w-900 h-200 text-left ">
              <thead>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden text-center">
                    <button className="px-5 border-r">
                    xóa
                    </button>
                    <button className="px-5">sửa</button>
                    </th>
                </tr>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden text-center">
                    <button className="px-5 border-r">
                    xóa
                    </button>
                    <button className="px-5">sửa</button>
                    </th>
                </tr>
                <tr>
                  <th className="border border-xamden">Name</th>
                  <th className="border border-xamden">Potiton</th>
                  <th className="border border-xamden">Office</th>
                  <th className="border border-xamden">Age</th>
                  <th className="border border-xamden text-center">
                    <button className="px-5 border-r">
                    xóa
                    </button>
                    <button className="px-5">sửa</button>
                    </th>
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

  