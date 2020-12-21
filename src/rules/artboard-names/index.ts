import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const artboardNames: RuleDefinition = {
  rule: async (context) => {

    for (const artboard of context.utils.objects.artboard) {

      if (artboard.name != null && !artboard.name.match(/^\_[^\s]+( +\- +.*)?$/gm)) { // match naming scheme '_section-name (optional: - Description)'
        context.utils.report('\'' + artboard.name + '\' name is not properly formatted', artboard);
      }

    }

  },
  name: 'nds-sketch-layout-assistant/artboard-names',
  title: 'Artboard Names',
  description: 'Reports artboard names that are not properly formatted in your layout file.',
}
