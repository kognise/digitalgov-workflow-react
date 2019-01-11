export default (name) => {
  name = name.replace(/\band |\bthe |\bare |\bis |\bof |\bto /gi, '')
  name = name.replace(/[^a-zA-Z0-9\s]/g,"")
  name = name.toLowerCase()
  name = name.replace(/\s\s+/g, ' ')
  name = name.trim()
  name = name.replace(/\s/g,'-')
  return name
}