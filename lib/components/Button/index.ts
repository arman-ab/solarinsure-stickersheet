import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import React from 'react';
import { createComponent } from '@lit/react';

import styles from './styles.component.scss?inline';
import globalStyles from '../../globals/scss/index.scss?inline';

const TAG_NAME = 'si-button';

@customElement(TAG_NAME)
class SIButtonLit extends LitElement {
    @property({ type: String }) variant: 'primary' | 'secondary' | 'secondary-gray' | 'tertiary' | 'tertiary-gray' = 'primary';
    @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';
    @property({ type: Boolean }) link = false;
    @property({ type: Boolean }) icon = false;

    static get styles() {
        return [
            unsafeCSS(globalStyles),
            unsafeCSS(styles)
        ]
    }

    get buttonClasses() {
        const variantClasses = {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            'secondary-gray': 'btn-secondary-gray',
            tertiary: 'btn-tertiary',
            'tertiary-gray': 'btn-tertiary-gray',
        };
        const sizeClasses = {
            sm: 'btn-sm',
            md: 'btn-md',
            lg: 'btn-lg',
            xl: 'btn-xl',
            '2xl': 'btn-2xl',
        };
        const linkClasses = this.link ? 'btn-link' : '';
        const iconClasses = this.icon ? 'btn-icon' : '';

        return `btn ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${linkClasses} ${iconClasses}`;
    }

    render() {
        return html`
            <button class="${this.buttonClasses}">
                <slot></slot>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: SIButtonLit;
    }
}

export const SIButton = createComponent({
    tagName: TAG_NAME,
    elementClass: SIButtonLit,
    react: React,
    events: {},
});
