import { ReduxProvider } from './ReduxProvider'
import { RouterProvider } from './RouterProvider'

export const AppProvider = () => {
	return (
		<ReduxProvider>
			<RouterProvider />
		</ReduxProvider>
	)
}
