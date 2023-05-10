import { render } from '@testing-library/react-native';

import { NativeBaseProvider } from 'native-base';
import { AppProvider } from '../context';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const renderWithProviders = (children: JSX.Element) => {
  return render(
    <AppProvider>
      <NativeBaseProvider initialWindowMetrics={inset}>
        {children}
      </NativeBaseProvider>
    </AppProvider>,
  );
};
export * from '@testing-library/react-native';

export { renderWithProviders };
