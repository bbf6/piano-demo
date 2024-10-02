import { useConfigStore } from 'src/stores/config'

const FILE_PATH = '/piano/'

const getFileName = key => {
  const configStore = useConfigStore()
  const name = key.alphabet.toLowerCase().replace('#', '_sharp_')
  return `${FILE_PATH}${name}${configStore.currentOctave}.mp3`
}

const pressKey = key => {
  const fileName = getFileName(key)
  const audio = new Audio(fileName)
  audio.play()
}

export { pressKey }
