import TextField from '@material-ui/core/TextField'
import GoButton from '../Buttons/GoButton'

const TextInputComponent = ({ setIsInputComponent, setWords }) => {
  const handleChange = (event) => {
    const strReplace = event.target.value.replace(/\n/g, ' %Enter% ')
    const words = strReplace.split(/\s/)
    setWords(words)
  }

  return (
    <>
      <TextField
        sx={{ width: '100%', my: 3 }}
        id='outlined-textarea'
        label='Вставьте Ваш текст сюда. Для перевода слова сделайте на нем клик мыши. Для перевода куска текста выделите его и также кликните мишью.'
        multiline
        rows={20}
        onChange={handleChange}
      />
      <GoButton setIsInputComponent={setIsInputComponent} />
    </>
  )
}

export default TextInputComponent
