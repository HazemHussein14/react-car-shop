import SectionTitlte from '../UI/SectionTitle'
import MultiCarousel from './MultiCarousel'

const CarsSection = () => {
  return (
    <section id='cars' className='section-spacing'>
      <SectionTitlte title={'Cars'} titleColor={'text-[#741906]'} largeTitleColor={''}/>
      <MultiCarousel/>
    </section>
  )
}

export default CarsSection