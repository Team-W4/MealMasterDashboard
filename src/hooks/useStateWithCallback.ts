import { useEffect, useState } from "react";

const useStateWithCallback = (initialState: any, callback: Function) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export default useStateWithCallback;
