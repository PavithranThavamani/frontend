import React from "react";

const context = React.createContext();
const UserProvider = context.Provider;
const UserConsumer = context.Consumer;

export default context;

export { UserProvider, UserConsumer };
