import { createComponent } from '@lit/react'
import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import React from 'react'

import styles from './styles.component.scss?inline'
import globalStyles from '@lib/globals/scss/index.scss?inline'

const TAG_NAME = 'si-copy-to-clipboard'

@customElement(TAG_NAME)
class SICopyToClipboardLit extends LitElement {
    @property({ type: String }) text = ''

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            unsafeCSS(styles)
        ]
    }

    private copyText() {
        navigator.clipboard.writeText(this.text).then(
            () => {
                console.log('Text copied to clipboard')
            },
            (err) => {
                console.error('Could not copy text: ', err)
            }
        )
    }

    render() {
        return html`
            <button @click="${this.copyText}"><slot></slot></button>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: SICopyToClipboardLit;
    }
}

export const SICopyToClipboard = createComponent({
    tagName: TAG_NAME,
    elementClass: SICopyToClipboardLit,
    react: React,
    events: {}
})
