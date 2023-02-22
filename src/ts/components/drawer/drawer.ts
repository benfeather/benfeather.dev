import './drawer.scss'
import gsap from 'gsap'

export class Drawer {
	el!: Element

	backdrop!: Element | null

	closeButton!: Element | null

	content!: Element | null

	isOpen = false

	isAnimating = false

	constructor(el: Element) {
		if (!el) {
			throw new Error('Drawer element is not defined')
		}

		// Set elements
		this.el = el
		this.backdrop = this.el.querySelector('.drawer__backdrop')
		this.closeButton = this.el.querySelector('.drawer__close')
		this.content = this.el.querySelector('.drawer__content')

		// Bind event listeners
		this.backdrop?.addEventListener('click', () => this.close())

		this.closeButton?.addEventListener('click', () => this.close())

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				this.close()
			}
		})
	}

	public async open() {
		if (this.isOpen || this.isAnimating) return

		this.isAnimating = true

		const tl = this._tl()
		await tl.play()

		this.isOpen = true
		this.isAnimating = false
	}

	public async close() {
		if (!this.isOpen || this.isAnimating) return

		this.isAnimating = true

		const tl = this._tl()
		await tl.reverse(1)

		this.isOpen = false
		this.isAnimating = false
	}

	public toggle() {
		if (this.isOpen) {
			this.close()
		} else {
			this.open()
		}
	}

	private _tl() {
		// Create timeline
		const tl = gsap.timeline({
			onStart: () => {
				this.el.classList.add('drawer--active')
			},
			onReverseComplete: () => {
				this.el.classList.remove('drawer--active')
			},
		})

		// Add animations
		if (this.backdrop) {
			tl.fromTo(
				this.backdrop,
				{
					autoAlpha: 0,
				},
				{
					duration: 0.3,
					ease: 'power2.out',
					autoAlpha: 1,
				},
				0,
			)
		}

		if (this.content) {
			tl.fromTo(
				this.content,
				{
					x: '100%',
				},
				{
					duration: 0.3,
					ease: 'power2.out',
					x: '0%',
				},
				0,
			)
		}

		// Return timeline
		return tl
	}
}
