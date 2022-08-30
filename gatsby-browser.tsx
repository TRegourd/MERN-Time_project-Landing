import "./src/styles/tailwind.scss";
import "./src/styles/icons.scss";
import ReactDOM from "react-dom/client";

export function replaceHydrateFunction() {
  return (element: any, container: any) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
}
