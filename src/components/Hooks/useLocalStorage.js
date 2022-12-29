import { useState, useEffect } from 'react';

export const useLocalStorage = (keyworld, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(keyworld)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(keyworld, JSON.stringify(state));
  }, [keyworld, state]);

  return [state, setState];
};
