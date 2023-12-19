const Footer = () => {
    return (
      <footer className="footer">
        <section className="container common-footer">
          <div className="accordian">
            <app-accordian-group>
              {/* ...Các app-accordian và nội dung tương ứng ở đây */}
            </app-accordian-group>
            <div className="div-footer">
              <app-accordian>
                {/* ...Nội dung app-accordian liên quan */}
              </app-accordian>
              {/* ...Thêm các phần tử HTML và nội dung khác ở đây */}
            </div>
            <div className="social-link">
              <p>Copyright © 2023 KFC Vietnam</p>
              <app-footer-bottom>
                {/* ...Các liên kết đến các trang mạng xã hội */}
              </app-footer-bottom>
            </div>
            <hr style={{ color: 'white', backgroundColor: 'white' }} />
            <div className="row">
              {/* ...Thông tin công ty */}
            </div>
          </div>
        </section>
      </footer>
    );
  };
  
  export default Footer;
  