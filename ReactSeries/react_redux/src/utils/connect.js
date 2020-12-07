import React, { Component, PureComponent } from 'react';
import { StoreContext } from './context';
export function connect(mapStateToProps, mapDispatchToProp) {
    return function enhanceHOC(WrappedComponent) {
        class EnhanceComponent extends Component {

            static contextType = StoreContext;
            constructor(props) {
                super(props);
                console.log("打印 context", this.context);
                console.log("打印 context", this.context);
                console.log("打印 context", );
                console.log("打印 context", );

                this.state = {
                    // storeState: mapStateToProps(this.context.getState())
                }
            }

            componentDidMount() {
                this.unsubscribe = this.context.subscribe( ()=> {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            render() {
            
                return (
                        <WrappedComponent {...this.props}
                                          {...mapStateToProps(this.context.getState())}
                                          {...mapDispatchToProp(this.context.dispatch)}
                        ></WrappedComponent>
                )
            }
        }

        EnhanceComponent.contextType = StoreContext;
        return EnhanceComponent;
    }
}