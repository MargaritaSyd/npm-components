// components/atoms/Avatar/Avatar.tsx
import Image from "next/image";
import { jsx, jsxs } from "react/jsx-runtime";
var sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-16 h-16 text-lg",
  xlg: "w-18 h-18 text-lg"
};
var Avatar = ({ src, name, size = "md", isOnline }) => {
  return /* @__PURE__ */ jsxs("div", { className: "absolute", children: [
    /* @__PURE__ */ jsx("div", { className: `relative items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold ${sizeClasses[size]} overflow-hidden`, children: /* @__PURE__ */ jsx(
      Image,
      {
        src: src != null ? src : "/default-user.png",
        alt: name != null ? name : "user",
        fill: true,
        className: "rounded-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx("span", { className: `absolute bottom-0
            ${size === "sm" ? "size-2 right-1" : "size-3 right-2"}
            ${isOnline ? "bg-green-600" : "bg-red-700"}
            rounded-full border-white` })
  ] });
};

// components/atoms/Button/Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2(
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Header = ({
  logo,
  actions,
  userName,
  sticky = true
}) => {
  return /* @__PURE__ */ jsxs2("header", { className: `
      w-full bg-white border-b border-slate-200 px-6 py-3 
      flex items-center justify-between z-50
      ${sticky ? "sticky top-0" : "relative"}
    `, children: [
    /* @__PURE__ */ jsx3("div", { className: "flex items-center gap-2 font-bold text-xl text-slate-800", children: logo || /* @__PURE__ */ jsx3("span", { children: "MyBrand" }) }),
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-4", children: [
      userName && /* @__PURE__ */ jsxs2("span", { className: "text-sm text-slate-600 hidden sm:block", children: [
        "Hola, ",
        /* @__PURE__ */ jsx3("span", { className: "font-semibold", children: userName })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "flex items-center gap-2", children: actions })
    ] })
  ] });
};
export {
  Avatar,
  Button,
  Header
};
