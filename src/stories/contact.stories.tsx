import { ComponentStory, ComponentMeta } from '@storybook/react';
import Contact from '../contents/contact/contact';
import { LanguageContext } from '../app';

export default {
    title: 'Portfolio/Body/Contact',
    component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />;

export const Japanese = Template.bind({});
Japanese.args = {
    mail: 'sample@example.com',
    urlInstagram: 'https://www.example.com'
};
Japanese.decorators = [
    (Story) => (
        <LanguageContext.Provider value={{ isSwitched: false, setIsSwitched: () => { } }}>
            <Story />
        </LanguageContext.Provider>
    ),
]

export const English = Template.bind({});
English.args = {
    mail: 'sample@example.com',
    urlInstagram: 'https://www.example.com'
};
English.decorators = [
    (Story) => (
        <LanguageContext.Provider value={{ isSwitched: true, setIsSwitched: () => { } }}>
            <Story />
        </LanguageContext.Provider>
    ),
]