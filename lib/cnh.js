export default (fixed, dynamic) => {
  let finalClassName = fixed
  if (!dynamic) dynamic = {}
  for (let className in dynamic) {
    if (dynamic[className]) {
      finalClassName += ' '
      finalClassName += className
    }
  }
  return finalClassName
}