import "./ScrollUp.css"

const ScrollUp = () => {
    window.addEventListener('scroll', function() {
        const scrollBtn = document.querySelector('.scrollup');
        // When scroll height is higher than 560 viewport height, add the 
        // show-scroll class to the element tag with scrollup class.
        if (this.scrollY >= 560) scrollBtn.classList.add('show-scroll')
        
        else scrollBtn.classList.remove('show-scroll')
        
    })

  return (
    <div>
        <a href="#" className="scrollup">
            <i class="uil uil-arrow-up scrollup__icon"></i>
        </a>
    </div>
  )
}
export default ScrollUp