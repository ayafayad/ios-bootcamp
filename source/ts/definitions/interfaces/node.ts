/**
 * @author Ahmed Serag
 * @date 2020-01-23
 * @description define the Node interface.
 * @filename node.ts
 */

/**
 * an Entity of the Tree timeline.
 *
 * @export
 * @interface Node
 */
export interface Node {
  /**
   * title of the Node
   *
   * @type {string}
   * @memberof Node
   */
  title: string;
  /**
   * content that node represents.
   *
   * @type {string}
   * @memberof Node
   */
  content?: string;
  /**
   * a boolean which is true the node leaves(children) are visible
   *
   * @type {boolean}
   * @memberof Node
   */
  isVisible?: boolean;
  /**
   * leaves of the node.
   *
   * @type {Node[]}
   * @memberof Node
   */
  children?: Node[];
}