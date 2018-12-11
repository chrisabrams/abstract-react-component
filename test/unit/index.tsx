import AbstractReactClass from '../../src/index'
import React from 'react'
import { expect, mount } from 'test/helpers'

describe('Abstract React Class', function () {

  it('should get derived class props, react props, and react state', function () {

    interface IProps {
      message: string
    }

    class DerivedClass extends AbstractReactClass<IProps> {

      public static defaultProps: Partial<IProps> = {
        message: 'Hello World!'
      }

      mode = 'default'

      state = {
        foo: 'bar'
      }

      type: string

      constructor(props) {
        super(props)

        this.type = 'derived'
      }

      render() {
        return <div>{this.props.message}</div>
      }

    }

    const { ref, root, unmount } = mount(<DerivedClass />)

    expect(root.mode).to.equal('default')
    expect(root.props.message).to.equal('Hello World!')
    expect(root.state.foo).to.equal('bar')
    expect(root.type).to.equal('derived')

    unmount()

  })

})
