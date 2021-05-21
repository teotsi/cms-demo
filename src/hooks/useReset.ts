import { useStore } from '../zustand/store';

const useReset = () => {
    const setPoint = useStore(state => state.setPoint);
    return (setters) => {
        setPoint(null);
        setters.forEach(setter => setter(null))
    }
}

export default useReset
