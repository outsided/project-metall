import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from '../routes'

export const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ Page, path }) => (
					<Route
						path={path}
						element={<Page />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}
