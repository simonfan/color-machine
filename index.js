window.addEventListener('WebComponentsReady', function () {

  var machine = window.machine = document.querySelector('#m');
  var textEditor = document.querySelector('#text-editor');
  var canvas = document.querySelector('#canvas');
  var workspace = document.querySelector('#workspace');

  // workspace sizing
  textEditor.addEventListener('editor-width-changed', setWorkspaceSizing);
  textEditor.addEventListener('editor-height-changed', setWorkspaceSizing);

  function setWorkspaceSizing() {
    // should be inside event listener
    workspace.style.width = textEditor.get('editorWidth') + 'px';
    workspace.style.height = textEditor.get('editorHeight') + 'px';
  }

  // clear
  textEditor.addEventListener('columns-changed', clear);
  textEditor.addEventListener('rows-changed', clear);
  textEditor.addEventListener('font-size-changed', clear);

  function clear() {
    console.log('clear')
    canvas.clear();
  }

  // SET VALUES ONTO SCOPE
  machine.set('columns', 30);
  machine.set('rows', 12);
  textEditor.editor.setValue(Array(60 * 15 + 1).join("0"));

  setTimeout(function () {
    machine.set('showEditor', false);
  }, 1000)


  // immediately invoke
  setWorkspaceSizing();
});