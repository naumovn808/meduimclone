export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error('Error getting data from localStorage', e);
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    return localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error setting data in localStorage', e);
  }
};
