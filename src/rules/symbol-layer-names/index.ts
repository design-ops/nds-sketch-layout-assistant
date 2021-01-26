import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const symbolLayerNames: RuleDefinition = {
  rule: async (context) => {

    const sharedSymbols: Map<string, string> = new Map()

    for (const symbolMaster of context.utils.foreignObjects.symbolMaster) {
        sharedSymbols.set(symbolMaster.symbolID, symbolMaster.name)
    }

    for (const layer of context.utils.objects.anyLayer) {
      if (layer._class != 'symbolInstance') continue

      const symbolName = sharedSymbols.get(layer.symbolID)

      if (symbolName != undefined && layer.name == symbolName) continue
      context.utils.report("\'"+layer.name+"\' does not match the symbol master name \'"+symbolName+"\'", layer)

    }

  },
  name: 'nds-sketch-layout-assistant/symbol-layer-names',
  title: 'Symbol Layer Names',
  description: 'Reports symbol layer names that that do not match their symbol master names.',
}
