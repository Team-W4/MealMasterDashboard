import React, { useCallback, useMemo, useState } from 'react';
import { UseStateful } from './useStateful';

export type UseInput = UseStateful<string> & {
  onChangeText: (e: string) => void;
  hasValue: boolean;
  clear: () => void;
  valueBind: {
    onChangeText: React.Dispatch<string>;
    value: string;
  };
};

function useInput(initial: string | number | boolean = ''): UseInput {
  const stringified = initial.toString();
  const [value, setValue] = useState<string>(stringified);
  const onChangeText = useCallback((e) => setValue(e), []);

  const clear = useCallback(() => setValue(''), []);
  return useMemo(
    () => ({
      value,
      setValue,
      hasValue: value !== undefined && value !== null && value.trim() !== '',
      clear,
      onChangeText,
      valueBind: {
        onChangeText: setValue,
        value,
      },
    }),
    [clear, onChangeText, value],
  );
}

export default useInput;
