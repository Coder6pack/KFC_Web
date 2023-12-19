const Header = () => {
    return (
      <header className="common-header">
        <section className="container mx-auto flex items-center">
          <div className="header-left hidden md:block">
            <a href="javascript:void(0);" className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="header-nav flex-grow">
            <a href="/" className="logo">KFC</a>
            <ul className="hidden md:flex">
              <li><a href="/menu" className="mat-ripple mat-ripple-unbounded">THỰC ĐƠN</a></li>
              <li><a href="/book-party" className="mat-ripple mat-ripple-unbounded">DỊCH VỤ TIỆC</a></li>
              <li><a href="/he-thong-nha-hang-kfc">Hệ Thống Nhà Hàng</a></li>
            </ul>
          </div>
          <div className="header-right flex items-center">
            <div>
              <a href="javascript:void(0);" className="inactive">
                <span className="button-content">Bắt đầu đặt hàng</span>
              </a>
            </div>
            <a href="/en/" className="lang-option">English</a>
            <a href="/" className="lang-option hidden">Tiếng Việt</a>
            <ul>
              <li>
                <a>
                  <i className="icon-login"></i>
                </a>
              </li>
              <li>
                <div className="shopping-cart">
                  <div className="lines">
                    <span className="line first"></span>
                    <span className="line second"></span>
                    <span className="line third"></span>
                  </div>
                  <a href="/cart" className="mat-ripple basket blank mat-ripple-unbounded">0</a>
                </div>
              </li>
            </ul>
            <a href="javascript:void(0);" className="hamburger ham-desktop-menu hidden md:block">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </section>
      </header>
    );
  };
  
  export default Header;
  