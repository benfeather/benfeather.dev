import path from 'path'
import {defineConfig} from 'vite'

export default defineConfig(({command}) => ({
	base: '/',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/scss/global";`,
			},
		},
	},
}))
