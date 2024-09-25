import { useConfigStore } from 'src/stores/config'

const FILE_PATH = 'src/assets/piano/'

const getFileName = key => {
  const configStore = useConfigStore()
  const name = key.alphabet.toLowerCase()
  const fullPath = `${FILE_PATH}${name}${configStore.currentOctave}.mp3`
  return encodeURIComponent(fullPath)
}

const pressKey = key => {
  const fileName = getFileName(key)
  const audio = new Audio(fileName)
  audio.play()
}

export { pressKey }
