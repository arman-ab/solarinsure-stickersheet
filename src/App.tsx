import { SIButton } from '@lib/main'

function App() {

    return <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4">
        <img src="/logo.jpg" alt="Logo" className="w-40"/>
        <div className="grid grid-cols-5 gap-4 p-4">
            <SIButton size="sm">
                Primary SM
            </SIButton>
            <SIButton>
                Primary MD
            </SIButton>
            <SIButton size="lg">
                Primary LG
            </SIButton>
            <SIButton size="xl">
                Primary XL
            </SIButton>
            <SIButton size="2xl">
                Primary 2XL
            </SIButton>
            <SIButton variant="secondary" size="sm">
                Secondary SM
            </SIButton>
            <SIButton variant="secondary">
                Secondary MD
            </SIButton>
            <SIButton variant="secondary" size="lg">
                Secondary LG
            </SIButton>
            <SIButton variant="secondary" size="xl">
                Secondary XL
            </SIButton>
            <SIButton variant="secondary" size="2xl">
                Secondary 2XL
            </SIButton>
            <SIButton variant="secondary-gray" size="sm">
                Secondary Gray SM
            </SIButton>
            <SIButton variant="secondary-gray">
                Secondary Gray MD
            </SIButton>
            <SIButton variant="secondary-gray" size="lg">
                Secondary Gray LG
            </SIButton>
            <SIButton variant="secondary-gray" size="xl">
                Secondary Gray XL
            </SIButton>
            <SIButton variant="secondary-gray" size="2xl">
                Secondary Gray 2XL
            </SIButton>
            <SIButton variant="tertiary" size="sm">
                Tertiary SM
            </SIButton>
            <SIButton variant="tertiary">
                Tertiary MD
            </SIButton>
            <SIButton variant="tertiary" size="lg">
                Tertiary LG
            </SIButton>
            <SIButton variant="tertiary" size="xl">
                Tertiary XL
            </SIButton>
            <SIButton variant="tertiary" size="2xl">
                Tertiary 2XL
            </SIButton>
            <SIButton variant="tertiary-gray" size="sm">
                Tertiary Gray SM
            </SIButton>
            <SIButton variant="tertiary-gray">
                Tertiary Gray MD
            </SIButton>
            <SIButton variant="tertiary-gray" size="lg">
                Tertiary Gray LG
            </SIButton>
            <SIButton variant="tertiary-gray" size="xl">
                Tertiary Gray XL
            </SIButton>
            <SIButton variant="tertiary-gray" size="2xl">
                Tertiary Gray 2XL
            </SIButton>
        </div>
    </div>
}

export default App
