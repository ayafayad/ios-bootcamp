/**
 * @author Ahmed Serag
 * @date 2019-01-23
 * @description Node.
 * @filename home.tsx
 */
import React from "react";
import { Common } from "utilities/common";
import { Node as NodeInterface } from "interfaces/node";
import Modal from "react-modal";
import CONTENT_ICON from "static/images/content-icon.png";
import CLOSE_ICON from "static/images/close.png";

export class Node extends React.Component<
  NodeInterface,
  {
    isCollapsed: boolean;
    isModalOpen: boolean;
  }
> {
  constructor(props: NodeInterface) {
    super(props);
    this.state = {
      isCollapsed: props.isVisible ? false : true,
      isModalOpen: false
    };

    this.collapse = this.collapse.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
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

  /**
   * trigger Modal based on action type
   *
   * @param {boolean} action a boolean that triggers Content Modal
   * @memberof Node
   */
  triggerModal(action: boolean) {
    if (this.state.isModalOpen !== action) {
      this.setState({
        isModalOpen: action
      });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <li>
          <a
            href={`#${this.props.title}`}
            id={this.props.title}
            onClick={this.collapse}
          >
            {this.props.title}
          </a>
          {Common.exist(this.props.content) && (
            <img
              src={CONTENT_ICON}
              className="show-modal-btn"
              onClick={() => this.triggerModal(true)}
            />
          )}
          {!this.state.isCollapsed && Common.exist(this.props.children) && (
            <ul className="vertical">
              {this.props.children.map((leaf, index) => {
                return <Node key={index} {...leaf} />;
              })}
            </ul>
          )}
        </li>
        {Common.exist(this.props.content) && (
          <Modal
            isOpen={this.state.isModalOpen}
            contentLabel={this.props.title}
            ariaHideApp={false}
          >
            <img
              onClick={() => this.triggerModal(false)}
              className="close-modal"
              src={CLOSE_ICON}
            />
            <h1>{this.props.title}</h1>
            {this.props.content.map((block, i) => {
              let response: React.ReactElement;

              switch (block.type) {
                case "paragraph":
                  response = (
                    <p key={i}>
                      {(block.value as string)
                        .split("\n")
                        .map((line, index) => {
                          return (
                            <>
                              {line}
                              <br />
                            </>
                          );
                        })}
                    </p>
                  );
                  break;
                  case "code":
                  response = (
                    <div className="code" key={i}>
                      {(block.value as string)
                        .split("\n")
                        .map((line, index) => {
                          return (
                            <>
                              {line}
                              <br />
                            </>
                          );
                        })}
                    </div>
                  );
                  break;
                case "title":
                  response = <h2 key={i}>{block.value}</h2>;
                  break;
                case "list":
                  response = (
                    <ul key={i}>
                      {(block.value as string[]).map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  );
                  break;
                default:
                  response = <p key={i}>{block.value}</p>;
              }
              return response;
            })}
          </Modal>
        )}
      </>
    );
  }
}
