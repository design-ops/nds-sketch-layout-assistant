import { resolve } from 'path'
import { testRuleInAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('Artboard names', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './artboard-names.sketch'),
    Assistant,
    "nds-sketch-layout-assistant/artboard-names"
  )
  expect(violations[0].message).toBe("'dashboard v3' name is not properly formatted")
  expect(violations[1].message).toBe("'dashboard' name is not properly formatted")
  expect(violations).toHaveLength(2)
})

test('Duplicate artboards', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './duplicate-artboards.sketch'),
    Assistant,
    "nds-sketch-layout-assistant/duplicate-artboards"
  )
  expect(violations[0].message).toBe("'_dashboard' has a duplicate artboard")
  expect(violations).toHaveLength(1)
})

test('Local styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './local-styles.sketch'),
    Assistant,
    "nds-sketch-layout-assistant/local-styles"
  )
  expect(violations[0].message).toBe("'background' is a local style")
  expect(violations[1].message).toBe("'title' is a local style")
  expect(violations).toHaveLength(2)
})
