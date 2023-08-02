import { useState } from 'react'
import translate from 'translate'

const SpanComponent = ({ text }) => {
  const [isShowTranslate, setIsShowTranslate] = useState(false)
  const [translatedText, setTranslatedText] = useState(null)

  const getTranslate = async (text) => {
    const result = await translate(text, 'ru')
    return result
  }
  const clickHandler = async () => {
    const textSelection = window.getSelection().toString()
    if (textSelection) {
      const translate = await getTranslate(textSelection)
      setTranslatedText(translate)
      setIsShowTranslate(true)
    } else {
      if (!translatedText) {
        const translate = await getTranslate(text)
        setTranslatedText(translate)
        setIsShowTranslate(true)
      } else {
        setIsShowTranslate(true)
      }
    }
  }
  const mouseLeaveHandler = () => {
    setIsShowTranslate(false)
    setTranslatedText('')
  }

  return (
    <span
      onClick={clickHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ position: 'relative' }}
    >
      {isShowTranslate && (
        <div
          style={{
            backgroundColor: 'yellow',
            position: 'absolute',
            bottom: '70%',
            width: '100vw'
          }}
        >
          {translatedText}
        </div>
      )}
      {text}
    </span>
  )
}

export default SpanComponent
