export function CreateObjectToDo (text) {
  this.text = text
  this.date = new Date().toLocaleDateString()
  this.id = Date.now()
  this.isComplete = false
}
