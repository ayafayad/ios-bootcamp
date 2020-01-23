/**
 * @author Ahmed Serag
 * @date 2019-07-15
 * @description home Layout of the App.
 * @filename home.tsx
 */
import React from "react";
import { Node } from "./node";
import { TREE } from "consts/tree";
import { Common } from "utilities/common";

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="tree">
      <ul>

        <li className="root">
          <a href="#">{TREE.title} </a>
          <ul className="vertical">
            {Common.exist(TREE.children) && 
              TREE.children.map((leaf, index)=> {
                return(
                  <Node
                    key={index}
                    {...leaf}
                  />
                );
              })
            }
          </ul>
        </li>
      </ul>
    </div>  
    );
  }
}
