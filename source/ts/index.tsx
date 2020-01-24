/**
 * @author Ahmed Serag
 * @date 2019-07-15
 * @description start point of the react application that uses
 * react dom to manipulate the root div.
 * @filename index.tsx
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "layouts/home";

/**
 * state of application component.
 *
 * @interface AppState
 */
// tslint:disable-next-line: no-empty-interface
interface AppState {
  // State of App Component.
}

/**
 * the Start point of the project.
 *
 * @class App
 * @extends {React.Component<{}, AppState>}
 */
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      // Add App State Here if any.
    };
  }

  render(): React.ReactNode {
    return (
      <Home/>
    );
  }
}

/**
 * The application.
 *
 * @type {(void|Element|React.Component<*, React.ComponentState, *>)}
 */
ReactDOM.render(<App />, document.getElementById("root"));
