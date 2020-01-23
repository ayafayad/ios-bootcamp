/**
 * @author Ahmed Serag
 * @date 2019-01-23
 * @description Node.
 * @filename home.tsx
 */
import React from "react";
import { Common } from "utilities/common";
import { Node as NodeInterface } from "interfaces/node";


export class Node extends React.Component<NodeInterface,{
  isCollapsed: boolean;
}> {
  
  constructor(props: NodeInterface) {
    super(props);
    this.state = {
      isCollapsed: props.isVisible ? true : false
    };

    this.collapse = this.collapse.bind(this);
  }
  
  /**
   * Collapse node leaves.
   *
   * @memberof Node
   */
  collapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }


  render(): React.ReactNode {
    return (
      <li>
        <a 
          href={`#${this.props.title}`}
          id={this.props.title}
          onClick={this.collapse}
        >
          {this.props.title}
        </a>
        {!this.state.isCollapsed && 
          Common.exist(this.props.children) &&
          (
            <ul className="vertical">
              {this.props.children.map((leaf, index)=> {
                  return (
                    <Node
                      key={index}
                      {...leaf}
                    /> 
                  );
              })}
            </ul>
          )
        }
      </li>
    );
  }
}
