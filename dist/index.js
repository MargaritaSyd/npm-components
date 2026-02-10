"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  Button: () => Button,
  Header: () => Header
});
module.exports = __toCommonJS(index_exports);

// components/atoms/Avatar/Avatar.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
var sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-16 h-16 text-lg",
  xlg: "w-18 h-18 text-lg"
};
var Avatar = ({ src, name, size = "md", isOnline }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "absolute", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `relative items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold ${sizeClasses[size]} overflow-hidden`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_image.default,
      {
        src: src != null ? src : "/default-user.png",
        alt: name != null ? name : "user",
        fill: true,
        className: "rounded-full object-cover"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute bottom-0
            ${size === "sm" ? "size-2 right-1" : "size-3 right-2"}
            ${isOnline ? "bg-green-600" : "bg-red-700"}
            rounded-full border-white` })
  ] });
};

// components/atoms/Button/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var sizeClasses2 = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-lg",
  full: "w-full py-3 text-lg"
};
var variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
  secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
  tertiary: "bg-transparent text-gray-600 hover:bg-gray-100 underline-offset-4 hover:underline"
};
var disabledClasses = "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70 shadow-none hover:bg-gray-300 hover:no-underline";
var Button = ({
  text,
  size = "md",
  variant = "primary",
  disabled = false,
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      onClick: !disabled ? onClick : void 0,
      disabled,
      className: `
        inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200
        ${disabled ? disabledClasses : variantClasses[variant]} 
        ${sizeClasses2[size]}
      `,
      children: text
    }
  );
};

// components/organisms/Header/Header.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Header = ({
  logo,
  actions,
  userName,
  sticky = true
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: `
      w-full bg-white border-b border-slate-200 px-6 py-3 
      flex items-center justify-between z-50
      ${sticky ? "sticky top-0" : "relative"}
    `, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex items-center gap-2 font-bold text-xl text-slate-800", children: logo || /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "MyBrand" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-4", children: [
      userName && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "text-sm text-slate-600 hidden sm:block", children: [
        "Hola, ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-semibold", children: userName })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex items-center gap-2", children: actions })
    ] })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button,
  Header
});
