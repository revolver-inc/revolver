export default function buildAllSliderData(rawProducts, rawProductLists) {
  const products = cleanProducts(rawProducts)
  const productLists = getLists(rawProductLists)

  const { featuredList, localList, indieList } = productLists

  const featuredData = buildSlider(featuredList, products)
  const localData = buildSlider(localList, products)
  const indieData = buildSlider(indieList, products)

  return { featuredData, localData, indieData }
}

function buildSlider(productList, products) {
  let sliderData = []
  for (let item of productList) {
    let target = item.product
    let found = products.find(elt => elt.name === target)
    sliderData.push(found)
  }
  return sliderData
}

// Get an array of products. If the product has HTML body content,
//  attach it to our product object.
export function cleanProducts(products) {
  let arr = []
  for (let raw of products) {
    // products.foreach(raw => {
    const product = raw.node.frontmatter
    // If we are building something with the html, attach it to product
    if (hasBodyContent(raw.node)) {
      product.body = raw.node.html
    }
    // Attach excerpt to product if it exists
    if (raw.node.excerpt !== undefined) {
      product.excerpt = raw.node.excerpt
    }
    arr.push(product)
  }

  return arr
}

function cleanList(li) {
  removeEmpty(li)
  return li
}

function getLists(productLists) {
  const productArr = []
  for (let edge of productLists) {
    productArr.push(cleanList(edge.node))
  }
  return { ...productArr[0], ...productArr[1], ...productArr[2] }
}

const removeEmpty = obj => {
  Object.keys(obj).forEach(key => obj[key] == null && delete obj[key])
}

function hasBodyContent(prod) {
  return prod.html !== undefined && prod.html.length > 1
}
