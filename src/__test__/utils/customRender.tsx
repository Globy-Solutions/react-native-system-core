import { render } from '@testing-library/react-native';
import { ErrorBoundary } from 'react-error-boundary';
// import renderer from 'react-test-renderer';
import { StateProvider } from 'src/state-management';
import ThemeProvider from 'src/theme/theme-provider';

type Props = {
  children: React.ReactNode;
};

const logError = (error: Error) => {
  // Do something with the error, e.g. log to an external API
  throw new Error(error.message);
};
const Provider = ({ children }: Props) => (
  // @ts-ignore
  <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
    <ThemeProvider>
      <StateProvider>
        {children}
      </StateProvider>
    </ThemeProvider>
  </ErrorBoundary>
);
const App = ({ children }: Props) => (
  // @ts-ignore
  <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
    {children}
  </ErrorBoundary>
);
const toJSON = (component: any) => {
  const r = App(component);
  // renderer.create(r).toJSON();
  return render(r);
};

export * from '@testing-library/react-native';
export { App, Provider, toJSON };

