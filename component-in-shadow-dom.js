class OtherComponent extends HTMLElement {
  #shadowDom = null

  constructor() {
    super()
    this.#initialize()
  }

  #initialize() {
    this.#handleShadowDom().#creatingInternals().#injectElement()
  }

  #handleShadowDom() {
    this.#shadowDom = this.attachShadow({
      mode: 'open',
    })
    return this
  }

  #creatingInternals() {
    const wrapper = document.createElement('span')
    wrapper.setAttribute('class', 'wrapper')

    const icon = document.createElement('span')
    icon.setAttribute('class', 'icon')
    icon.setAttribute('tabIndex', '0')

    const info = document.createElement('span')
    info.setAttribute('class', 'info')

    const text = this.getAttribute('data-text')
    info.textContent = text

    const img = document.createElement('img')
    img.src = this.hasAttribute('img')
      ? this.getAttribute('img')
      : 'img/default.png'
    img.alt = this.hasAttribute('alt') ? this.getAttribute('alt') : ''
    icon.appendChild(img)

    this.#shadowDom.appendChild(wrapper)
    wrapper.appendChild(icon)
    wrapper.appendChild(info)

    return this
  }

  #injectElement() {
    window.customElements.define('some-element', OtherComponent)
  }
}
