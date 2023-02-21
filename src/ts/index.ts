import {Drawer} from './components'

const drawer = new Drawer()
const toggle = document.querySelector('#show-tcs') as HTMLElement

toggle.addEventListener('click', () => {
	drawer.open()
})
