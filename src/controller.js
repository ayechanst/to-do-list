class AskModel {
  whatTodo() {
    // here we get from the model what needs to happen
    // on submit, set the information in the model, which would create an instance of a to-do-item
    // on project, set the information in the model, which would create an instance of a project
    // on a delete, call the delete function in the model
  }
}

class TellView {
  viewDoThis() {
    // here we get what the model tells us
    // and set what view needs to do
  }
}
