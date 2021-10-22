import React from 'react'

export default function AsyncComponentHOC(importComponent: any) {
  class AsyncComponent extends React.Component<any, any> {
    constructor(props: any) {
      super(props)

      this.state = {
        component: null,
      }
      this.isCancelled = false
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      if (!this.isCancelled) {
        this.setState({
          component,
        })
      }
    }

    componentWillUnmount() {
      this.isCancelled = true
    }

    isCancelled: boolean

    render() {
      const { component } = this.state

      const Component: React.ComponentType | null = component
      return Component ? <Component /> : null
    }
  }

  return AsyncComponent
}
