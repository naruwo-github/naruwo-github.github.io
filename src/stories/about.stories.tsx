import { ComponentStory, ComponentMeta } from '@storybook/react';
import About from '../contents/about/about';
import { LanguageContext } from '../app';

export default {
    title: 'Portfolio/Body/About',
    component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Japanese = Template.bind({});
Japanese.args = {
    profileImagePath: 'path/to/image'
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
    profileImagePath: 'path/to/image'
};
English.decorators = [
    (Story) => (
        <LanguageContext.Provider value={{ isSwitched: true, setIsSwitched: () => { } }}>
            <Story />
        </LanguageContext.Provider>
    ),
]