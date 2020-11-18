export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "delete":
			return state.filter((elem) => elem.id !== action.payload); //1234234
		case "toogle":
			return state.map((elem) =>
				elem.id === action.payload
					? { ...elem, done: !elem.done }
					: elem
			);

		case "toogle-old":
			return state.map((elem) => {
				if (elem.id === action.payload) {
					return {
						...elem,
						done: !elem.done,
					};
				} else {
					return elem;
				}
			});

		default:
			return state;
	}
};
