import { useStore } from '../zustand/store';

const useReset = (setters) => {
    const setPoint = useStore(state => state.setPoint);
    return () => {
        setPoint(null);
        setters.forEach(setter => setter(undefined))
    }
}

export default useReset
