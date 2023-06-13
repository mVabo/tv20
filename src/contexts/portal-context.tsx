import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import PortalProps from '../types/portal';
import { useParams } from 'react-router-dom';
import api from '../api';

interface PortalState {
	selectedPortal?: PortalProps;
	portalId?: string;
	portals?: PortalProps[];
}

/**
 * A context for keeping track of selected portal and available portals
 */
const PortalContext = createContext<PortalState>({});

export const usePortal = () => useContext(PortalContext);

export const PortalProvider: FC<PropsWithChildren> = ({ children }) => {
	const [selectedPortal, setSelectedPortal] = useState<
		PortalProps | undefined
	>();
	const [portals, setPortals] = useState<PortalProps[]>();
	const { portalId } = useParams();

	useEffect(() => {
		getPortals();
	}, []);

	useEffect(() => {
		getPortal();
	}, [portalId]);

	const getPortals = async () => {
		const res = await api.get('/portals?page=1');
		if (res.status === 200) setPortals(res.data.docs);
	};

	const getPortal = async () => {
		const res = await api.get(`/portals/${portalId}`);
		if (res.status === 200) setSelectedPortal(res.data);
	};

	return (
		<PortalContext.Provider
			value={{
				portals,
				selectedPortal,
				portalId,
			}}
		>
			{children}
		</PortalContext.Provider>
	);
};
