import purgeCSS from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'

export default {
	plugins: [
		autoprefixer,
		purgeCSS({
			content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
			safelist: [],
			defaultExtractor(content) {
				return content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
			},
		}),
	],
}
