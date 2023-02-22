import path from 'path'
import {defineConfig} from 'vite'

export default defineConfig(({command}) => ({
	base: './',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "${path.resolve(__dirname, 'src/scss/global')}";`,
			},
		},
	},
}))
