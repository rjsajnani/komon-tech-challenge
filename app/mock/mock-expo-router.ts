jest.mock('expo-router', () => ({
  useRouter: () => {
    push: () => jest.fn();
  },
  useSearchParams: () => {},
  Stack: { Screen: 'Screen' },
}));
