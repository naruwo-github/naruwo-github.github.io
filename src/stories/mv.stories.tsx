import { ComponentStory, ComponentMeta } from '@storybook/react';
import Mv from '../contents/mv/mv';
import { LanguageContext } from '../app';

export default {
    title: 'Portfolio/Body/Mv',
    component: Mv,
} as ComponentMeta<typeof Mv>;

const Template: ComponentStory<typeof Mv> = (args) => <Mv {...args} />;

export const Japanese = Template.bind({});
Japanese.args = {
    author: 'Taro Sample',
    title: 'Portfolio',
    urlGithub: 'https://www.example.com',
    urlHatena: 'https://www.example.com',
    urlQiita: 'https://www.example.com'
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
    author: 'Taro Sample',
    title: 'Portfolio',
    urlGithub: 'https://www.example.com',
    urlHatena: 'https://www.example.com',
    urlQiita: 'https://www.example.com'
};
English.decorators = [
    (Story) => (
        <LanguageContext.Provider value={{ isSwitched: true, setIsSwitched: () => { } }}>
            <Story />
        </LanguageContext.Provider>
    ),
]