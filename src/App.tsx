import { SIButton, SICopyToClipboard } from '@lib/main'

function App() {
    const buttons = [
        {
            text: 'Primary SM',
            copy: {
                html: `<si-button size="sm">
    Primary SM
</si-button>`,
                react: `<SIButton size="sm">
    Primary SM
</SIButton>`
            },
            props: {
                size: 'sm'
            }
        },
        {
            text: 'Primary MD',
            copy: {
                html: `<si-button>
    Primary MD
</si-button>`,
                react: `<SIButton>
    Primary Md
</SIButton>`
            },
            props: {}
        },
        {
            text: 'Primary LG',
            copy: {
                html: `<si-button size="lg">
    Primary LG
</si-button>`,
                react: `<SIButton size="lg">
    Primary LG
</SIButton>
`
            },
            props: {
                size: 'lg'
            }
        },
        {
            text: 'Secondary SM',
            copy: {
                html: `<si-button size="sm" variant="secondary">
    Secondary SM
</si-button>
`,
                react: `<SIButton size="sm" variant="secondary">
    Secondary SM
</SIButton>
`
            },
            props: {
                variant: 'secondary',
                size: 'sm'
            }
        },
        {
            text: 'Secondary MD',
            copy: {
                html: `<si-button size="md" variant="secondary">
    Secondary MD
</si-button>
`,
                react: `<SIButton size="md" variant="secondary">
    Secondary MD
</SIButton>
`
            },
            props: {
                variant: 'secondary',
            }
        },
        {
            text: 'Secondary LG',
            copy: {
                html: `<si-button size="lg" variant="secondary">
    Secondary LG
</si-button>
`,
                react: `<SIButton size="lg" variant="secondary">
    Secondary LG
</SIButton>
`
            },
            props: {
                variant: 'secondary',
                size: 'lg'
            }
        },
        {
            text: 'Tertiary SM',
            copy: {
                html: `<si-button size="sm" variant="tertiary">
    Tertiary SM
</si-button>
`,
                react: `<SIButton size="sm" variant="tertiary">
    Tertiary SM
</SIButton>
`
            },
            props: {
                variant: 'tertiary',
                size: 'sm'
            }
        },
        {
            text: 'Tertiary MD',
            copy: {
                html: `<si-button size="md" variant="tertiary">
    Tertiary md
</si-button>
`,
                react: `<SIButton size="md" variant="tertiary">
    Tertiary md
</SIButton>
`
            },
            props: {
                variant: 'tertiary',
            }
        },
        {
            text: 'Tertiary LG',
            copy: {
                html: `<si-button size="lg" variant="tertiary">
    Tertiary LG
</si-button>
`,
                react: `<SIButton size="lg" variant="tertiary">
    Tertiary LG
</SIButton>
`
            },
            props: {
                variant: 'tertiary',
                size: 'lg'
            }
        },
    ]


    return <div className="max-w-screen-2xl mx-auto flex flex-col items-center gap-4">
        <img src="/logo.jpg" alt="Logo" className="w-40"/>
        <div className="flex flex-col gap-4 p-4">
            {buttons.map((item: any, index) => {
                return <div className="flex gap-2" key={index}>
                    <SIButton {...item.props}>
                        {item.text}
                    </SIButton>
                    -
                    <SICopyToClipboard text={item.copy.html}>
                        <SIButton variant="secondary-gray" size="sm">Copy HTML</SIButton>
                    </SICopyToClipboard>

                    <SICopyToClipboard text={item.copy.react}>
                        <SIButton variant="secondary-gray" size="sm">Copy React</SIButton>
                    </SICopyToClipboard>
                </div>
            })}
        </div>
    </div>
}

export default App
