import SectionTitlte from '../SectionTitle'
import MultiCarousel from './MultiCarousel'

const CarsSection = () => {
  return (
    <section id='cars' className='section-spacing'>
      <SectionTitlte title={'Cars'} titleColor={'text-[#741906]'}/>
      <MultiCarousel/>
    </section>
  )
}

export default CarsSection