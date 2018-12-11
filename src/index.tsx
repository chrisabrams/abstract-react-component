import React, { Component } from 'react'

export interface IRootComponent {
  setRoot?: any
}

export default abstract class RootComponent<P> extends Component<P & IRootComponent, {}> {

  constructor(props) {
    super(props)

    if(typeof props.setRoot == 'function') {
      
      props.setRoot(this)

    }
  }

}
