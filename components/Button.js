import { Component } from "react";

class Button extends Component {
  static Primary = ({ children, ...props }) => (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      {...props}
    >
      {children}
    </button>
  );

  static Secondary = ({ children, ...props }) => (
    <button
      className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      {...props}
    >
      {children}
    </button>
  );

  render() {
    return <></>;
  }
}

export default Button;
