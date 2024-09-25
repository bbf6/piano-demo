import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useConfigStore = defineStore('config', {
  state: () => ({
    currentOctave: LocalStorage.getItem('currentOctave') || 3,
    showKeyNames: LocalStorage.getItem('showKeyNames'),
    showLatin: LocalStorage.getItem('showLatin'),
    keys : [
      { latin: 'Do',   alphabet: 'C',  isWhite: true  },
      { latin: 'Do#',  alphabet: 'C#', isWhite: false },
      { latin: 'Re',   alphabet: 'D',  isWhite: true  },
      { latin: 'Re#',  alphabet: 'D#', isWhite: false },
      { latin: 'Mi',   alphabet: 'E',  isWhite: true  },
      { latin: 'Fa',   alphabet: 'F',  isWhite: true  },
      { latin: 'Fa#',  alphabet: 'F#', isWhite: false },
      { latin: 'Sol',  alphabet: 'G',  isWhite: true  },
      { latin: 'Sol#', alphabet: 'G#', isWhite: false },
      { latin: 'La',   alphabet: 'A',  isWhite: true  },
      { latin: 'La#',  alphabet: 'A#', isWhite: false },
      { latin: 'Si',   alphabet: 'B',  isWhite: true  }
    ]
  }),
  getters: {
    whiteKeys: state => state.keys.filter(k => k.isWhite),
    blackKeys: state => {
      const head = state.keys.filter(k => !k.isWhite)
      const tail = head.splice(2)
      return [head, {}, tail].flat()
    }
  },
  actions: {
    changeOctave(value) {
      this.currentOctave = value
      LocalStorage.set('currentOctave', value)
    },
    toggleKeyNames() {
      this.showKeyNames = !this.showKeyNames
      LocalStorage.set('showKeyNames', this.showKeyNames)
    },
    toggleLatin() {
      this.showLatin = !this.showLatin
      console.log(this.showLatin)
      LocalStorage.set('showLatin', this.showLatin)
    }
  }
})
