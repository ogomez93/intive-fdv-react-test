import {
  APPLY_FILTERS,
  SET_AGE_FILTER_PREVIEW,
  SET_NAME_FILTER_PREVIEW,
  SET_POSITION_FILTER_PREVIEW
} from '../../actionTypes/filters';

export const applyFilters = () => {
  return {
    type: APPLY_FILTERS
  };
};

export const setAgeFilterPreview = (ageFilterPreview) => {
  return {
    type: SET_AGE_FILTER_PREVIEW,
    payload: {
      ageFilterPreview
    }
  };
};

export const setNameFilterPreview = (nameFilterPreview) => {
  return {
    type: SET_NAME_FILTER_PREVIEW,
    payload: {
      nameFilterPreview
    }
  };
};

export const setPositionFilterPreview = (positionFilterPreview) => {
  return {
    type: SET_POSITION_FILTER_PREVIEW,
    payload: {
      positionFilterPreview
    }
  };
};
