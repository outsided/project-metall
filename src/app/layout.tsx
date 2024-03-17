import { Provider } from 'react-redux'
import '@/styles/index.scss'
import { createMetadata } from '@/utils/metadata'
import { store } from '@/store/store'
export const metadata = createMetadata('Metall', 'Metall')
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Provider store={store}>
			<html lang="en">
				<body>
					<main>{children}</main>
				</body>
			</html>
		</Provider>
		)
}
