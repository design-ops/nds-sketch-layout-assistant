import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { artboardNames } from './rules/artboard-names'
import { localStyles } from './rules/local-styles'
import { duplicateArtboards } from './rules/duplicate-artboards'

const assistant: AssistantPackage = async () => {
  return {
    name: 'nds-sketch-layout-assistant',
    rules: [
      artboardNames,
      localStyles,
      duplicateArtboards,
    ],
    config: {
      rules: {
        'nds-sketch-layout-assistant/artboard-names': { active: true },
        'nds-sketch-layout-assistant/local-styles': { active: true },
        'nds-sketch-layout-assistant/duplicate-artboards': { active: true },
      },
    },
  }
}

export default assistant
