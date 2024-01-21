export default function Detail() {
    return (
        <>
        <div className="flex w-full justify-center gap-250 ">
            <div className="pt-60 relative">
                <img src="https://static.kfcvietnam.com.vn/images/items/lg/3-ga-xot-cua.jpg?v=gODzP3" alt=""/>
                <div className="flex flex-nowrap w-460 h-95 pt-20 gap-6 ">
                    <img src="https://static.kfcvietnam.com.vn/images/items/lg/3-ga-xot-cua.jpg?v=gODzP3" alt="" className="w-92 h-92"/>
                    <img src="https://static.kfcvietnam.com.vn/images/items/lg/3-ga-xot-cua.jpg?v=gODzP3" alt="" className="w-92 h-92"/>
                    <img src="https://static.kfcvietnam.com.vn/images/items/lg/3-ga-xot-cua.jpg?v=gODzP3" alt="" className="w-92 h-92"/>
                    <img src="https://static.kfcvietnam.com.vn/images/items/lg/3-ga-xot-cua.jpg?v=gODzP3" alt="" className="w-92 h-92"/>
                    <img src="https://static.kfcvietnam.com.vn/images/items/lg/3-ga-xot-cua.jpg?v=gODzP3" alt="" className="w-92 h-92"/>
                </div>
                <div className="absolute "><button className="text-xamden">LEFT</button></div>
                <div className="absolute right-0"><button className="text-xamden">RIGHT</button></div>
            </div>
            <div className="pt-150">
                <ul className=" w-430 h-400 px-35 pt-55 pb-35 rounded-lg shadow-2xl">
                    <li className="pb-20">
                        <p className="text-32">3 GÀ XỐT CUA</p>
                    </li>
                    <li className="pb-20 border-b border-xam">
                        <p className="text-15">3 Miếng Gà Xốt Cua</p>
                    </li>
                    <li className="pb-20 pt-20 font-bold">
                        <p className="text-22">MÓN CỦA BẠN</p>
                    </li>
                    <li className="pb-20 border-b border-xam">
                        <p className="text-15">3 COB: 3 x Gà Giòn Cay <a href="#">i</a></p>
                    </li>
                    <li className="pb-20 pt-21">
                        <div className="flex flex-nowrap justify-between w-360 h-52">
                            <div className="px-20 py-15 items-center w-98 h-52 flex flex-nowrap gap-20">
                                <div className="border rounded-full"><button className="pr-6 pl-6 pt-2 pb-2">-</button></div>
                                <div>1</div>
                                <div className="border rounded-full"><button className="px-5 pt-2 pb-2">+</button></div>
                            </div>
                            <div className=""><button className="text-16 border border-do rounded-full px-20 py-15 bg-red text-white">Thêm vào giỏ (177.000đ)</button></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}