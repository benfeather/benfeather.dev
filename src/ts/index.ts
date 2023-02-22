import {Drawer} from './components'

const drawerEl = document.querySelector('#drawer')
const drawerToggle = document.querySelector('#drawer-toggle')

if (drawerEl && drawerToggle) {
	const drawer = new Drawer(drawerEl)
	drawerToggle.addEventListener('click', () => drawer.open())
}
