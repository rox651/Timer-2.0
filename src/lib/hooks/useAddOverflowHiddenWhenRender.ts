import { useEffect } from 'react';

const useAddOverflowHiddenWhenRender = () => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	return null;
};

export default useAddOverflowHiddenWhenRender;
