const Contact = () =>{
    return (
        <>
        <div>
  <div className="page-heading contact-heading header-text" style={{backgroundImage: 'url(images/heading-4-1920x500.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="text-content">
            <h4>Car rental</h4>
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="find-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Our Location on Maps</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div id="map">
            <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameBorder={0} style={{border: 0}} allowFullScreen />
          </div>
        </div>
        <div className="col-md-4">
          <div className="left-content">
            <h4>About our office</h4>
            <p>Our Office is situated in Rio de Janerio</p>
            <ul className="social-icons">
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" line-height= "8" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg> </a></li>
<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></li>
<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a></li>
                    
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="send-message">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Send us a Message</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact-form">
            <form id="contact" action method="post">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                  </fieldset>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required />
                  </fieldset>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <img src="/images/team_01.jpg" className="img-fluid" alt />
          <h5 className="text-center" style={{marginTop: 15}}>Administrator</h5>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Contact;