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

test('Shape layer names', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './shape-layer-names.sketch'),
    Assistant,
    "nds-sketch-layout-assistant/shape-layer-names"
  )
  expect(violations[0].message).toBe("'Rectangle' does not match the shared style name 'background'")
  expect(violations).toHaveLength(1)
})

test('Text layer names', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './text-layer-names.sketch'),
    Assistant,
    "nds-sketch-layout-assistant/text-layer-names"
  )
  expect(violations[0].message).toBe("'Type something' does not match the shared style name 'title'")
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
