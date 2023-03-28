import { useCallback, useState } from 'react';

export function useToggledState(initialState?: boolean | (() => boolean)) {
	const [value, setValue] = useState(initialState ?? false);

	const toggleValue = useCallback((givenValue: boolean | undefined) => {
		setValue((currentValue) => {
			return typeof givenValue === 'boolean' ? givenValue : !currentValue;
		});
	},[]);

    return [value, toggleValue] as const;