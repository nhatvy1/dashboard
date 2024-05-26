export const mapOrder = (originalArray: any, orderArray: any, key: any) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}

//   example
const originalItems = [
  { id: 'id-1', name: 'One' },
  { id: 'id-2', name: 'Two' },
  { id: 'id-3', name: 'Three' },
  { id: 'id-4', name: 'Four' },
  { id: 'id-5', name: 'Five' }
]
const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1']
const key = 'id'

const orderedArray = mapOrder(originalItems, itemOrderIds, key)
// console.log('Original:', originalItems)
// console.log('Ordered:', orderedArray)
