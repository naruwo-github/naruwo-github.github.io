import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LanguageContext } from '../app';
import Header from '../header/header';

export default {
  title: 'Portfolio/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Japanese = Template.bind({});
Japanese.args = {
  author: 'Taro Sample'
};
Japanese.decorators = [
  (Story) => (
    <LanguageContext.Provider value={{ isSwitched: false, setIsSwitched: () => { } }}>
      <Story />
    </LanguageContext.Provider>
  ),
];

export const English = Template.bind({});
English.args = {
  author: 'Taro Sample'
};
English.decorators = [
  (Story) => (
    <LanguageContext.Provider value={{ isSwitched: true, setIsSwitched: () => { } }}>
      <Story />
    </LanguageContext.Provider>
  ),
]