export const setItem = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
	if (typeof window !== "undefined" && window.sessionStorage) {
		return JSON.parse(localStorage.getItem(key) || "{}");
	} else return null;
};
export const setSessionItem = (key: string, value: any) => {
	sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionItem = (key: string) => {
	if (typeof window !== "undefined" && window.sessionStorage) {
		return JSON.parse(sessionStorage.getItem(key) || "{}");
	} else return null;
};
