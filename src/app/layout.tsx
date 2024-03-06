import { AppProvider } from '@/components/providers'
import '@/styles/index.scss'
import { createMetadata } from '@/utils/metadata'

export const metadata = createMetadata('Metall', 'Metall')
import {store} from '@/store/store'
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<AppProvider store={store}>
					<main>{children}</main>
				</AppProvider>
			</body>
		</html>
	)
}
