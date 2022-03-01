import React, { Children } from 'react'
import { Text, RichText, types } from 'react-bricks/frontend'
import { Colors, BgColors, ParagraphColors, HeadlineAlignment, ParagraphAlignment } from '../utils/colors'

//=============================
// Local Types
//=============================

interface HeroUnitProps {
  color: types.IColor
  paragraphColor: types.IColor
  bgColor: types.IColor
  headlineAlignment?:  'left' | 'center' | 'right'
  paragraphAlignment?:  'left' | 'center' | 'right'
  fullHeight: boolean
  background: types.IImageSource
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const MdwpBgHeroUnit: types.Brick<HeroUnitProps> = ({ background, color, bgColor, paragraphColor, headlineAlignment, paragraphAlignment,fullHeight }) => {
  return (
     
    <section 
    style={{backgroundImage: `url(${background.src})`}} 
    
    className={`w-full flex items-center px-6 pb-12 antialiased bg-cover  
    
    
    ${
      fullHeight ? 'min-h-screen' : ''
    }`}>
      
  
    
  

    
    <div className={`mx-auto max-w-7xl `}>
    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
        <Text
          renderBlock={(props) => (
            <h1 className={`text-5xl font-extrabold leading-10 tracking-tight text-${headlineAlignment} ${
              bgColor.className
            } sm:leading-none md:text-6xl lg:text-7xl
            ${color?.className}
            `}>
              {props.children}
            </h1>
          )}
          placeholder="Type a title..."
          propName="title"
        />
        <RichText
          renderBlock={(props) => (
            <p className={`mx-auto mt-5 ${paragraphColor?.className} text-${paragraphAlignment} md:mt-12 md:max-w-lg lg:text-lg`}>
              {props.children}
            </p>
          )}
          placeholder="Type a text..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
          ]}
          renderCode={(props) => (
            <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
              {props.children}
            </code>
          )}
        />
        </div>
      </div>
    </section>
  )
}

//=============================
// Brick Schema
//=============================
MdwpBgHeroUnit.schema = {
  name: 'mdwp-hero-unit',
  label:'mdwp Hero Unit',
  getDefaultProps: () => ({
    Color: { color: '#000000', className: 'text-black' },
    ParagraphColor: { color: '#ffffff', className: 'text-white' },
    BgColor: { color: '#ffffff', className: 'bg-white' },
    HeadlineAlignment: { className: 'text-center' },
    ParagraphAlignment: { className: 'text-center' },
    fullHeight: false,
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'background',
      label: 'Background Image',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'color',
      label: 'Headline Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: Colors
      },
    },
    {
      name: 'bgColor',
      label: 'Headline Background Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: BgColors
      },
    },
    {
      name: 'paragraphColor',
      label: 'Paragraph Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: ParagraphColors
      },
    },
    {
      name: 'headlineAlignment',
      label: 'Headline Alignment',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: HeadlineAlignment
      },
    },
    {
      name: 'paragraphAlignment',
      label: 'Paragraph Alignment',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: ParagraphAlignment
      },
    },
    {
      name: 'fullHeight',
      label: 'Full Height',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default MdwpBgHeroUnit
