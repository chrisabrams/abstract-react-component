import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

interface IOptions {
  selector?: any
}

const docRoot = document.createElement('div')
docRoot.setAttribute('id', 'root')
document.body.appendChild(docRoot)

export default function mount (tree, _options?: IOptions) {

  const options = {
    selector: document.getElementById('root'),
    ..._options
  }

  let __ref = null
  let __root = null

  const clone = React.cloneElement(tree, {
    ref: ref => __ref = ref,
    setRoot: (root) => {
      __root = root
    }
  })

  render(clone, options.selector)

  const unmount = () => {
    unmountComponentAtNode(options.selector)
  }

  return {
    ref: __ref,
    root: __root,
    unmount
  }

}
