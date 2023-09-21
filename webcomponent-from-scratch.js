class MyWebComponent extends HTMLElement {
  constructor() {
    super()
    this.#build()
  }

  #build() {
    this.#initialize().#getElements().#injectElements()
  }

  #initialize() {
    this.attachShadow({ mode: 'open' })
    return this
  }

  #getElements() {
    const wrapper = document.createElement('span')
    wrapper.setAttribute('class', 'wrapper')

    const icon = wrapper.appendChild(document.createElement('span'))
    icon.setAttribute('class', 'icon')
    icon.setAttribute('tabIndex', '0')

    const image = icon.appendChild(document.createElement('img'))
    image.src = image.hasAttribute('src') ? image.getAttribute('src') : ''
    image.alt = image.getAttribute('alt') ?? ''

    const style = document.createElement('style')
    style.textContent = `.wrapper { display: block; }`

    this.shadowRoot.append(style, wrapper)
    return this
  }

  #injectElements() {
    window.customElements.define('some-component', MyWebComponent)
  }
}
