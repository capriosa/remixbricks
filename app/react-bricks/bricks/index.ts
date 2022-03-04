import { types } from 'react-bricks/frontend'

// =========================================
// REACT BRICKS UI
// You may also import { Single Bricks }
// to reduce the bundle size
import Blog from 'react-bricks-ui/blog'
import Website from 'react-bricks-ui/website'

// Example custom brick
import MyHeroUnit from './MyHeroUnit'
import MdwpHeroUnit from './MdwpHeroUnit'
import MdwpContentUnit from './MdwpContentUnit'
import MdwpSlide from './MdwpSlide'
import MdwpSlider from './MdwpSlider'

const bricks: types.Brick<any>[] = [
  ...Website,
  ...Blog,
  MyHeroUnit,
  MdwpHeroUnit,
  MdwpContentUnit,
  MdwpSlide,
  MdwpSlider
  // Put here your other bricks...
]

export default bricks
