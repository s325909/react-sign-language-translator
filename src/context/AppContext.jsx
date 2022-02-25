import UserProvider from "./UserContext";

// destruct children from props.children
const AppContext = ({ children }) => {
	return (<UserProvider>{children}</UserProvider>);
};

export default AppContext;
