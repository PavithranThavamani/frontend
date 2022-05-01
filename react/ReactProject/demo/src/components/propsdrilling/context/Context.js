import React from "react";

const context = React.createContext();
const Uprovider = context.Provider;
const Uconsumer = context.Consumer;

export default context;

export { Uprovider, Uconsumer };
