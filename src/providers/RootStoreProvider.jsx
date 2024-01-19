import { RootStore } from '@/store/RootStore';
import { StoreContext } from '@/contexts/StoreContext';

// local module level variable - holds singleton store
let store;

// function to initialize the store
function initializeStore() {
  const _store = store ?? new RootStore();

  // For server side rendering always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function RootStoreProvider({ children }) {
  // create the store
  const store = initializeStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
