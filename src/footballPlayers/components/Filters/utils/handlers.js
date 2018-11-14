export const onFilterChange = setFilter => ({ target: { value = '' } = {} } = {}) => setFilter(value);

export const onNameChange = ({ setName }) => onFilterChange(setName);
export const onPositionChange = ({ setPosition }) => onFilterChange(setPosition);
export const onAgeChange = ({ setAge }) => onFilterChange(setAge);
