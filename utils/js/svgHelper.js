function createSvgElement (svgStr) {
  return document.createRange().createContextualFragment(`${ svgStr }`)
}

export { createSvgElement }
