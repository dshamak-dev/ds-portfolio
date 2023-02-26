import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import { App } from './components/organisms/App';
import './index.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);