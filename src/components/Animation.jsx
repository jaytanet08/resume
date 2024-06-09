import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
const Animation = ({ title, images, effect }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const effects = {
      slideLeft: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-500px)',
      },
      slideRight: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(500px)',
      },
      slideUp: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(500px)',
      },
      slideDown: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(-500px)',
      },
      zoomIn: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0)',
      },
      rotate: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'rotate(0deg)' : 'rotate(180deg)',
      },
    };
  
    const springProps = useSpring({
      ...effects[effect],
      config: { duration: 1000 },
    });
  
    return (
      <div ref={ref} >
        <animated.div style={springProps}>
          <div className='div-label'>
            <label className='label-title'>{title}</label>
          </div>
          <div className='div-img-main'>
            {images.map((imgSrc, index) => (
              <div key={index} className='div-img-skill'>
                <img className='img-skill' src={imgSrc} alt={`${title} skill ${index + 1}`} />
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    );
  };

  export default Animation;
