'use client'

import type { ReactNode } from 'react'
import Components from '../Content/Componentmap/index'
import { ReduxProvider } from './ReduxProvider'

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return <ReduxProvider>
		<Components/>
		{children}
		</ReduxProvider>
}
