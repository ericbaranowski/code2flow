import * as chrome from 'chrome-aws-lambda'
import * as puppeteer from 'puppeteer-core'

const padding = 0

const getScreenshot = async (pageContent: string, targetId: string) => {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })

  const page = await browser.newPage()
  await page.setContent(pageContent)

  const rect = await page.evaluate(targetId => {
    const element = document.getElementById(targetId)
    const {x, y, width, height} = element.getBoundingClientRect() as DOMRect
    return {left: x, top: y, width, height, id: element.id}
  }, targetId)

  const file = await page.screenshot({
    type: 'png',
    omitBackground: true,
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  })

  await browser.close()
  return file
}

export default getScreenshot
