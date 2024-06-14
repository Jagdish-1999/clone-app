// ====call this function inside useEffect ====//
export const beforeUnload = (func: () => void): void => {
	const handleReload = (event: any) => {
		// console.log("handleReload called");

		func();
		// const confirmationMessage = "Are you sure you want to leave this page?";
		// event.returnValue = confirmationMessage; // For Chrome, Safari, Edge
		// return confirmationMessage; // For Firefox
	};
	window.addEventListener("beforeunload", handleReload, true);
};
