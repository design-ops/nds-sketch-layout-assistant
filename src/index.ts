import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { artboardNames } from './rules/artboard-names'
import { localStyles } from './rules/local-styles'
import { duplicateArtboards } from './rules/duplicate-artboards'
import { symbolLayerNames } from './rules/symbol-layer-names'
import { shapeLayerNames } from './rules/shape-layer-names'
import { textLayerNames } from './rules/text-layer-names'
// import { missingSymbol } from './rules/missing-symbol'

const assistant: AssistantPackage = async () => {
  return {
    name: 'nds-sketch-layout-assistant',
    rules: [
      artboardNames,
      localStyles,
      duplicateArtboards,
      symbolLayerNames,
      shapeLayerNames,
      textLayerNames,
      // missingSymbol,
    ],
    config: {
      rules: {
        'nds-sketch-layout-assistant/artboard-names': { active: true },
        'nds-sketch-layout-assistant/local-styles': { active: true },
        'nds-sketch-layout-assistant/duplicate-artboards': { active: true },
        'nds-sketch-layout-assistant/symbol-layer-names': { active: true },
        'nds-sketch-layout-assistant/shape-layer-names': { active: true },
        'nds-sketch-layout-assistant/text-layer-names': { active: true },
        // 'nds-sketch-layout-assistant/missing-symbol': { active: true },
      },
    },
  }
}

export default assistant
