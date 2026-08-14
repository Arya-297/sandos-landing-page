import { openingHours, socials } from "../Constants/Nav"


function Contact() {
  return (
    <footer id="contact">
            <img src="/images/footer-right-leaf.png" id="f-right-leaf"/>
            <img src="/images/footer-left-leaf.png" id="f-left-leaf"/>
            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Store</h3>
                    <p> 742 Evergreen Terrace Springfield, OR 97477</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>(555)234-456-1239</p>
                    <p>sandoscocktail@gamil.com</p>
                </div>
                <div>
                    <p>Open Every Day</p>
                    {openingHours.map((time)=>(
                        <p key={(time.day)}>
                            {time.day}:{time.time}
                        </p>
                    ))}
                </div>
                <div>
                    <h3>
                        Socials
                    </h3>
                   <div className="flex-center gap-4">
  {socials.map((social) => (
    <a
      key={social.name}
      aria-label={social.name}
      target="_blank"
      href={social.url}
      rel="noopener noreferrer"
    >
      <img src={social.icon} alt={social.name} />
    </a>
  ))}

                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Contact