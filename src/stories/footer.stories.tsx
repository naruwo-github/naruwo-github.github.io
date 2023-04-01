import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '../footer/footer';

export default {
    title: 'Portfolio/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    author: 'Taro Sample'
};