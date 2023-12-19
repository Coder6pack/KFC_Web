export default function Footer() {
  return (
    <section className="container common-footer">
    <app-footer-bottom>
        <div class="flex justify-around bg-black text-white py-10">
          <div class="list">
            <p>KFC Food</p>
            <p>Menu</p>
            <p>Order Lookup</p>
            <p>Gift Card</p>
          </div>
        </div>
        <div className="footer-bottom-wrap">
            <div>
                <a href="https://www.facebook.com/KFCVietnam/" target="_blank" className="footer-icon animated-links animate__animated animate__bounce" style={{ animationDelay: '2.2s' }}>
                    <i className="icon-facebook"></i>
                </a>
                <a href="https://www.instagram.com/kfc_vietnam/" target="_blank" className="footer-icon animated-links animate__animated animate__bounce" style={{ animationDelay: '2.3s' }}>
                    <i className="icon-instagram"></i>
                </a>
                <a href="https://www.youtube.com/user/KFCVietnam2011" target="_blank" className="footer-icon animated-links animate__animated animate__bounce" style={{ animationDelay: '2.4s' }}>
                    <i className="icon-youtube"></i>
                </a>
                <a href="https://twitter.com/kfc_vietnam" target="_blank" className="footer-icon animated-links animate__animated animate__bounce" style={{ animationDelay: '2.5s' }}>
                    <i className="icon-twitter"></i>
                </a>
            </div>
        </div>
    </app-footer-bottom>
    <p>Copyright © 2023 KFC Vietnam</p>
    </section>
  )
}